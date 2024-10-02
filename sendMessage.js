const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Ambil input WhatsApp invite link
    const inviteLink = core.getInput('whatsapp_invite_link');

    // Ambil detail event rilis dari GitHub context
    const release = github.context.payload.release;
    const releaseTitle = release.name || release.tag_name; // Judul rilis atau tag jika judul tidak ada
    const releaseBody = release.body || "No description provided"; // Deskripsi rilis

    // Kirim pesan ke konsol (atau WhatsApp API jika ingin)
    console.log(`New release published: ${releaseTitle}`);
    console.log(`Description: ${releaseBody}`);
    console.log(`Check the WhatsApp Group here: ${inviteLink}`);

    // Kamu bisa menambahkan logika lain di sini untuk mengirim pesan ke WhatsApp via API seperti Twilio
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
  }
}

run();
