export const careerTemplate = ({ name, email, whatsapp_number, position }) => {
  return `
    <div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
      "
    >
      <p>
        A new candidate has submitted an application
        through the Creyotech Careers page.
      </p>

      <hr />

      <p>
        <strong>Name:</strong>
        ${name}
      </p>

      <p>
        <strong>Email:</strong>
        ${email}
      </p>

      <p>
        <strong>WhatsApp Number:</strong>
        ${whatsapp_number}
      </p>

      <p>
        <strong>Position:</strong>
        ${position}
      </p>

      <hr />

      <h3>Attached Documents</h3>

      <ul>
        <li>Resume / CV</li>
        <li>Government ID</li>
        <li>Education Proof</li>
      </ul>

      <p>
        Submitted through Creyotech Careers.
      </p>
    </div>
  `;
};
