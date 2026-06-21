const generateBtn =
    document.getElementById("generateBtn");

const mobileInput =
    document.getElementById("mobileNumber");

const errorElement =
    document.getElementById("mobileNumberError");

const resultContainer =
    document.getElementById("whatsappURLContainer");

const whatsappLink =
    document.getElementById("whatsappLogoLink");

generateBtn.addEventListener(
    "click",
    generateWhatsAppURL
);

function generateWhatsAppURL() {

    const mobileNumber =
        mobileInput.value.trim();

    const message =
        document
            .getElementById("message")
            .value
            .trim();

    if (!/^[0-9]{10}$/.test(mobileNumber)) {

        errorElement.textContent =
            "Please enter a valid 10-digit mobile number.";

        resultContainer.classList.add("hidden");

        return;
    }

    errorElement.textContent = "";

    const encodedMessage =
        encodeURIComponent(message);

    const waLink =
        `https://wa.me/91${mobileNumber}?text=${encodedMessage}`;

    whatsappLink.href = waLink;

    resultContainer.classList.remove("hidden");
}
