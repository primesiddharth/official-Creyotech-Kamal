import { pool } from "../db/pool.js";
import { getOrCreateTaxonomy, linkTaxonomy } from "../services/taxonomyService.js";

const ADDRESS_FIELDS = [
  "address_line_1", "address_line_2", "post_office_name", "police_station_name",
  "city_name", "district_name", "state_name", "country_name", "postal_code",
];

function addressValues(body) {
  return {
    address_line_1: body.address_line_1?.trim(),
    address_line_2: body.address_line_2?.trim() || null,
    post_office_name: body.post_office_name?.trim(),
    police_station_name: body.police_station_name?.trim(),
    city_name: body.city_name?.trim(),
    district_name: body.district_name?.trim(),
    state_name: body.state_name?.trim(),
    country_name: (body.country_name || "India").trim(),
    postal_code: body.postal_code?.trim(),
  };
}

// ---------- VENDOR ----------
export const createVendor = async (req, res) => {
  try {
    const { company_name, brand_name, email, contacts, services } = req.body;
    const addr = addressValues(req.body);

    if (!company_name || !brand_name || !email || !contacts?.length || !services?.length) {
      return res.status(400).json({ success: false, message: "Company name, brand, email, at least one contact and one service are required." });
    }
    if (services.length > 8) {
      return res.status(400).json({ success: false, message: "Maximum 8 services allowed." });
    }

    const { rows } = await pool.query(
      `INSERT INTO vendors (company_name, brand_name, email, ${ADDRESS_FIELDS.join(", ")})
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING id`,
      [company_name.trim(), brand_name.trim(), email.trim(), ...ADDRESS_FIELDS.map((f) => addr[f])],
    );
    const vendorId = rows[0].id;

    for (const contact of contacts) {
      if (contact.name && contact.phone_number) {
        await pool.query(
          "INSERT INTO vendor_contacts (vendor_id, name, phone_number) VALUES ($1, $2, $3)",
          [vendorId, contact.name.trim(), contact.phone_number.trim()],
        );
      }
    }

    for (const serviceName of services.filter((s) => s.trim())) {
      const serviceId = await getOrCreateTaxonomy("service", serviceName.trim());
      await linkTaxonomy("vendor_services", "vendor_id", vendorId, "service_id", serviceId);
    }

    res.status(201).json({ success: true, message: "Vendor added." });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ success: false, message: "A contact with this phone number already exists." });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to save vendor." });
  }
};

export const listVendors = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT v.*,
      COALESCE(json_agg(DISTINCT jsonb_build_object('name', vc.name, 'phone_number', vc.phone_number)) FILTER (WHERE vc.id IS NOT NULL), '[]') AS contacts,
      COALESCE(json_agg(DISTINCT s.name) FILTER (WHERE s.id IS NOT NULL), '[]') AS services
    FROM vendors v
    LEFT JOIN vendor_contacts vc ON vc.vendor_id = v.id
    LEFT JOIN vendor_services vs ON vs.vendor_id = v.id
    LEFT JOIN services s ON s.id = vs.service_id
    WHERE v.is_active = true
    GROUP BY v.id
    ORDER BY v.created_at DESC
  `);
  res.json({ success: true, data: rows });
};

// ---------- FREELANCER ----------
export const createFreelancer = async (req, res) => {
  try {
    const { name, phone_number, email, services } = req.body;
    const addr = addressValues(req.body);

    if (!name || !phone_number || !email || !services?.length) {
      return res.status(400).json({ success: false, message: "All fields and at least one service are required." });
    }
    if (services.length > 6) {
      return res.status(400).json({ success: false, message: "Maximum 6 services allowed." });
    }

    const { rows } = await pool.query(
      `INSERT INTO freelancers (name, phone_number, email, ${ADDRESS_FIELDS.join(", ")})
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING id`,
      [name.trim(), phone_number.trim(), email.trim(), ...ADDRESS_FIELDS.map((f) => addr[f])],
    );
    const freelancerId = rows[0].id;

    for (const serviceName of services.filter((s) => s.trim())) {
      const serviceId = await getOrCreateTaxonomy("service", serviceName.trim());
      await linkTaxonomy("freelancer_services", "freelancer_id", freelancerId, "service_id", serviceId);
    }

    res.status(201).json({ success: true, message: "Freelancer added." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to save freelancer." });
  }
};

export const listFreelancers = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT f.*, COALESCE(json_agg(DISTINCT s.name) FILTER (WHERE s.id IS NOT NULL), '[]') AS services
    FROM freelancers f
    LEFT JOIN freelancer_services fs ON fs.freelancer_id = f.id
    LEFT JOIN services s ON s.id = fs.service_id
    WHERE f.is_active = true
    GROUP BY f.id
    ORDER BY f.created_at DESC
  `);
  res.json({ success: true, data: rows });
};

// ---------- ASSOCIATE ----------
export const createAssociate = async (req, res) => {
  try {
    const { name, phone_number, personal_email, skills } = req.body;
    const addr = addressValues(req.body);

    if (!name || !phone_number || !personal_email || !skills?.length) {
      return res.status(400).json({ success: false, message: "All fields and at least one skill are required." });
    }
    if (skills.length > 4) {
      return res.status(400).json({ success: false, message: "Maximum 4 skills allowed." });
    }

    const { rows } = await pool.query(
      `INSERT INTO associates (name, phone_number, personal_email, ${ADDRESS_FIELDS.join(", ")})
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING id`,
      [name.trim(), phone_number.trim(), personal_email.trim(), ...ADDRESS_FIELDS.map((f) => addr[f])],
    );
    const associateId = rows[0].id;

    for (const skillName of skills.filter((s) => s.trim())) {
      const skillId = await getOrCreateTaxonomy("skill", skillName.trim());
      await linkTaxonomy("associate_skills", "associate_id", associateId, "skill_id", skillId);
    }

    res.status(201).json({ success: true, message: "Associate added." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to save associate." });
  }
};

export const listAssociates = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT a.*, COALESCE(json_agg(DISTINCT sk.name) FILTER (WHERE sk.id IS NOT NULL), '[]') AS skills
    FROM associates a
    LEFT JOIN associate_skills aks ON aks.associate_id = a.id
    LEFT JOIN skills sk ON sk.id = aks.skill_id
    WHERE a.is_active = true
    GROUP BY a.id
    ORDER BY a.created_at DESC
  `);
  res.json({ success: true, data: rows });
};

export const deletePartner = async (req, res) => {
  const { type, id } = req.params;
  const table = { vendor: "vendors", freelancer: "freelancers", associate: "associates" }[type];
  if (!table) return res.status(400).json({ success: false, message: "Invalid type." });

  await pool.query(`UPDATE ${table} SET is_active = false, deleted_at = now() WHERE id = $1`, [id]);
  res.json({ success: true, message: "Removed." });
};