export const contactTemplate = ({
  name,
  email,
  whatsapp_number,
  problem_faced,
  solution_required,
}) => {
  return `

    <div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
      "
    >
      <p>
        A new inquiry has been submitted
        through the Creyotech website.
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
        <strong>Service Required:</strong>
        ${solution_required}
      </p>

      <p>
        <strong>Project Details:</strong>
      </p>

      <p>
        ${problem_faced}
      </p>

    </div>

  `;
};
