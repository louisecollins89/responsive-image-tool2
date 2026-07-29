const riskLevel = document.getElementById("riskLevel");
const component = document.getElementById("component");
const buttons = document.querySelectorAll('input[name="breakpoint"]');
const textButtons = document.querySelectorAll('input[name="text"]');

const guidance = document.getElementById("guidanceText");
const copy = document.getElementById("copy");

const safeArea = document.getElementById("safeArea");
const safeBox = document.querySelector(".safe-area");



buttons.forEach(button => {


    button.addEventListener("change", () => {


        let width = button.value;

        let layout = button.dataset.layout;


        component.style.width = width + "px";


        component.className = "component " + layout;



       if(width == "1090") {

    riskLevel.textContent = "Low risk";
    riskLevel.className = "risk";

}


if(width == "813") {

    riskLevel.textContent = "Medium risk";
    riskLevel.className = "risk medium";

}


if(width == "730") {

    riskLevel.textContent = "Medium risk";
    riskLevel.className = "risk medium";

}


if(width == "545") {

    riskLevel.textContent = "High risk";
    riskLevel.className = "risk high";

}


if(width == "580") {

    riskLevel.textContent = "High risk";
    riskLevel.className = "risk high";

}


if(width == "375") {

    riskLevel.textContent = "Highest risk";
    riskLevel.className = "risk high";

}


        if(layout === "tablet") {

            guidance.textContent =
            "Tablet layout. Image becomes a wide banner. Keep important subjects centred.";

        }


        if(layout === "mobile") {

            guidance.textContent =
            "Mobile layout. Image height reduces to 240px. Avoid placing important detail near the crop edges.";

        }


    });


});




textButtons.forEach(button => {


    button.addEventListener("change", () => {


        if(button.value === "short") {


            copy.innerHTML = `
            <p>
            Short editorial content.
            </p>`;


        }



        if(button.value === "medium") {


            copy.innerHTML = `
            <p>
            This component grows depending on the amount of editorial content.
            </p>

            <p>
            The image remains cropped using object-fit cover.
            </p>`;

        }



        if(button.value === "long") {


            copy.innerHTML = `
            <p>
            This component demonstrates how large amounts of editorial text can dramatically change the image proportions.
            </p>

            <p>
            On narrow desktop layouts the image becomes very thin, which increases the risk of losing the focal point.
            </p>

            <p>
            On mobile the component stacks and the image becomes a letterbox shape.
            </p>`;

        }


    });


});



safeArea.addEventListener("change",()=>{

    safeBox.style.display =
    safeArea.checked ? "block" : "none";

});