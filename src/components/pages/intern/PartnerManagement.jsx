import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { managerLogin } from "../../../services/authService";
import { fetchPartners, createPartner, deletePartner } from "../../../services/partnerService";
import ManagerNav from "./ManagerNav";

const TABS = [
  { key: "vendor", label: "Vendor" },
  { key: "freelancer", label: "Freelance" },
  { key: "associate", label: "Associate" },
];

const FIELD_CONFIG = {
  vendor: {
    fields: [
      ["company_name", "Vendor company name"],
      ["brand_name", "Brand name"],
      ["email", "Email"],
    ],
    hasOwnPhone: false,
    itemsKey: "services_offered",
    itemsLabel: "Services offered",
    maxItems: 8,
  },
  freelancer: {
    fields: [
      ["name", "Freelance name"],
      ["email", "Email"],
    ],
    hasOwnPhone: true,
    itemsKey: "services_offered",
    itemsLabel: "Services offered",
    maxItems: 6,
  },
  associate: {
    fields: [
      ["name", "Associate name"],
      ["personal_email", "Personal email"],
    ],
    hasOwnPhone: true,
    itemsKey: "skills",
    itemsLabel: "Skills",
    maxItems: 4,
  },
};

const ADDRESS_FIELDS = [
  ["address_line_1", "Address line 1"],
  ["address_line_2", "Address line 2 (optional)"],
  ["post_office_name", "Post office"],
  ["police_station_name", "Police station"],
  ["city_name", "City"],
  ["district_name", "District"],
  ["state_name", "State"],
  ["postal_code", "Postal code"],
];

const PhoneInput = ({ value, onChange }) => (
  <div className="flex">
    <span className="flex items-center rounded-l-lg border border-r-0 border-border-light bg-bg-soft px-3 text-sm text-muted">
      +91
    </span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
      placeholder="10-digit number"
      maxLength={10}
      className="w-full rounded-r-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
    />
  </div>
);

const PartnerForm = ({ type, onSaved }) => {
  const config = FIELD_CONFIG[type];
  const [form, setForm] = useState({ country_name: "India" });
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([{ name: "", phone: "" }]);
  const [items, setItems] = useState([""]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm({ country_name: "India" });
    setPhone("");
    setContacts([{ name: "", phone: "" }]);
    setItems([""]);
  }, [type]);

  const handleItemChange = (index, value) => {
    const updated = [...items];
    updated[index] = value;
    setItems(updated);
  };
  const addItem = () => { if (items.length < config.maxItems) setItems([...items, ""]); };
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const handleContactChange = (index, key, value) => {
    const updated = [...contacts];
    updated[index][key] = value;
    setContacts(updated);
  };
  const addContact = () => { if (contacts.length < 2) setContacts([...contacts, { name: "", phone: "" }]); };
  const removeContact = (index) => setContacts(contacts.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, [config.itemsKey]: items };

      if (config.hasOwnPhone) {
        payload.phone_number = "+91" + phone;
      }

      if (type === "vendor") {
        payload.contacts = contacts
          .filter((c) => c.name && c.phone)
          .map((c) => ({ name: c.name, phone_number: "+91" + c.phone }));
      }

      await createPartner(type, payload);
      toast.success("Saved.");
      setForm({ country_name: "India" });
      setPhone("");
      setContacts([{ name: "", phone: "" }]);
      setItems([""]);
      onSaved();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border-light bg-white p-6 shadow-soft">
      <div className="grid grid-cols-2 gap-3">
        {config.fields.map(([key, label]) => (
          <div key={key}>
            <label className="mb-1 block text-xs text-muted">{label}</label>
            <input
              type="text"
              value={form[key] || ""}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              required
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
        ))}
        {config.hasOwnPhone && (
          <div>
            <label className="mb-1 block text-xs text-muted">Phone number</label>
            <PhoneInput value={phone} onChange={setPhone} />
          </div>
        )}
      </div>

      <div>
        <p className="mb-2 text-xs font-medium text-muted">Address</p>
        <div className="grid grid-cols-2 gap-3">
          {ADDRESS_FIELDS.map(([key, label]) => (
            <div key={key}>
              <label className="mb-1 block text-xs text-muted">{label}</label>
              <input
                type="text"
                value={form[key] || ""}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required={!label.includes("optional")}
                className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {type === "vendor" && (
        <div>
          <label className="mb-1 block text-xs text-muted">Concerned persons (max 2)</label>
          <div className="space-y-2">
            {contacts.map((contact, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={contact.name}
                  onChange={(e) => handleContactChange(index, "name", e.target.value)}
                  className="flex-1 rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
                <div className="flex-1">
                  <PhoneInput
                    value={contact.phone}
                    onChange={(val) => handleContactChange(index, "phone", val)}
                  />
                </div>
                {contacts.length > 1 && (
                  <button type="button" onClick={() => removeContact(index)} className="text-rose-500">✕</button>
                )}
              </div>
            ))}
          </div>
          {contacts.length < 2 && (
            <button type="button" onClick={addContact} className="mt-2 text-sm text-primary">+ Add second contact</button>
          )}
        </div>
      )}

      <div>
        <label className="mb-1 block text-xs text-muted">{config.itemsLabel} (max {config.maxItems})</label>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                placeholder={`${config.itemsLabel} ${index + 1}`}
                className="flex-1 rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
              {items.length > 1 && (
                <button type="button" onClick={() => removeItem(index)} className="text-rose-500">✕</button>
              )}
            </div>
          ))}
        </div>
        {items.length < config.maxItems && (
          <button type="button" onClick={addItem} className="mt-2 text-sm text-primary">
            + Add {config.itemsLabel.toLowerCase()}
          </button>
        )}
      </div>

      <button type="submit" disabled={saving} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
        {saving ? "Saving…" : "Save"}
      </button>
    </form>
  );
};

const PartnerList = ({ type, refreshKey }) => {
  const config = FIELD_CONFIG[type];
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchPartners(type).then((res) => setList(res.data));
  }, [type, refreshKey]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    await deletePartner(type, id);
    setList(list.filter((item) => item.id !== id));
  };

  const nameField = config.fields[0][0];

  return (
    <div className="mt-6 space-y-3">
      {list.map((item) => (
        <div key={item.id} className="flex items-start justify-between rounded-xl border border-border-light bg-white p-4 shadow-soft">
          <div>
            <p className="text-sm font-semibold text-text-primary">{item[nameField]}</p>
            <p className="mt-1 text-xs text-muted">{(item[config.itemsKey] || []).join(", ")}</p>
          </div>
          <button onClick={() => handleDelete(item.id)} className="text-xs font-medium text-rose-600">
            Delete
          </button>
        </div>
      ))}
      {list.length === 0 && <p className="text-sm text-muted">No records yet.</p>}
    </div>
  );
};

const PartnerManagement = () => {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("vendor");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchPartners("vendor")
      .then(() => setAuthed(true))
      .catch(() => setAuthed(false))
      .finally(() => setChecking(false));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await managerLogin(password);
      setAuthed(true);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (checking) return <div className="flex min-h-screen items-center justify-center bg-bg-soft text-muted">Loading…</div>;

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-soft px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border border-border-light bg-white p-8 shadow-soft">
          <h1 className="text-lg font-semibold text-text-primary">Manager access</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-4 w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <button type="submit" className="mt-4 w-full rounded-lg bg-primary py-2 text-sm font-medium text-white">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <ManagerNav />
        <h1 className="text-2xl font-semibold text-text-primary">Partner management</h1>
        <p className="mt-1 text-sm text-muted">Are you adding a Vendor, Freelance, or Associate?</p>

        <div className="mt-6 inline-flex rounded-lg border border-border-light bg-white p-1">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.key ? "bg-primary text-white" : "text-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <PartnerForm type={activeTab} onSaved={() => setRefreshKey((k) => k + 1)} />
          <PartnerList type={activeTab} refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default PartnerManagement;