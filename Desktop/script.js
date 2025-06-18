function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const template = document.getElementById("template").value;

    const resumePreview = document.getElementById("resume-preview");

    let templateHTML = "";

    // Template 1
    if (template === "template1") {
        templateHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    }

    // Template 2
    if (template === "template2") {
        templateHTML = `
            <div style="border: 2px solid #007bff; padding: 20px;">
                <h1 style="color: #007bff;">${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <h2 style="border-bottom: 1px solid #007bff;">Experience</h2>
                <p>${experience}</p>
                <h2 style="border-bottom: 1px solid #007bff;">Education</h2>
                <p>${education}</p>
                <h2 style="border-bottom: 1px solid #007bff;">Skills</h2>
                <p>${skills}</p>
            </div>
        `;
    }

    // Template 3
    if (template === "template3") {
        templateHTML = `
            <div style="font-family: 'Georgia', serif; text-align: center;">
                <h1>${name}</h1>
                <h4>${email}</h4>
                <hr>
                <section>
                    <h3>Professional Experience</h3>
                    <p>${experience}</p>
                </section>
                <section>
                    <h3>Academic Background</h3>
                    <p>${education}</p>
                </section>
                <section>
                    <h3>Key Skills</h3>
                    <p>${skills}</p>
                </section>
            </div>
        `;
    }

    // Display the selected template
    resumePreview.innerHTML = templateHTML;

    // Show download button
    const downloadButton = document.getElementById("download-btn");
    downloadButton.style.display = "inline-block";
}

function downloadResume() {
    const element = document.getElementById("resume-preview");
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf library to download as PDF
    html2pdf().set(opt).from(element).save();
}
