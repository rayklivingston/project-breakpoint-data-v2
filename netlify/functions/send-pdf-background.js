// const { jsPDF } = require("jspdf");
// const nodemailer = require("nodemailer");
// const mg = require("nodemailer-mailgun-transport");

// const transporter = nodemailer.createTransport(
//   mg({
//     auth: {
//       api_key: "6d8307853cc92d585b1518ec574c0e9d-c3d1d1eb-4208b68b",
//       domain: "sandbox35d5a508b4834a47afa0c6bd22d80886.mailgun.org",
//     },
//   })
// );

// exports.handler = async function (event) {
//   const { content, destination } = JSON.parse(event.body);
//   console.log(`Sending PDF report to ${destination}`);

//   const report = Buffer.from(
//     new jsPDF().text(content, 10, 10).output("arraybuffer")
//   );
//   const info = await transporter.sendMail({
//     from: process.env.MAILGUN_SENDER,
//     to: destination,
//     subject: "Your report is ready!",
//     text: "See attached report PDF",
//     attachments: [
//       {
//         filename: `report-${new Date().toDateString()}.pdf`,
//         content: report,
//         contentType: "application/pdf",
//       },
//     ],
//   });

//   console.log(`PDF report sent: ${info.messageId}`);
// };

exports.handler = async () => {
  console.log('function ran')

  return {
    statusCode: 200,
    body: JSON.stringify({ name: 'Lasitha', app: 'Test Application' })
  }
}
