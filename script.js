// 400g/p | 6+ 650
// 1200ml/p | 6+ 2000
// 1000ml/p | 6+ 1500

// criancas = 0.5p

const DOM = {
    carne: document.querySelector(".container.results ul").children[0],
    cerveja: document.querySelector(".container.results ul").children[1],
    refrigerante: document.querySelector(".container.results ul").children[2],

    updateAmounts(carne, cerveja, refrigerante) {
        DOM.carne.textContent = `🥩 ${carne} kgs de carne`;
        DOM.cerveja.textContent = `🍺 ${cerveja} litros de cerveja`;
        DOM.refrigerante.textContent = `🥤 ${refrigerante} litros de refrigerante`;
    },
};

function calculateAmounts(adults, children, hours) {
    if (adults < 0 || children < 0 || hours < 0) {
        throw new Error("Por favor, entre um valor positivo");
    }

    if (hours < 6) {
        let carne, cerveja, refrigerante;
        carne = (adults + children * 0.5) * 0.4;
        cerveja = adults * 1.2;
        refrigerante = adults + children * 0.5;
        console.log(adults, children, hours);
        console.log(carne, cerveja, refrigerante);
        DOM.updateAmounts(carne, cerveja, refrigerante);
    } else {
        let carne, cerveja, refrigerante;
        carne = (adults + children * 0.5) * 0.4;
        cerveja = adults * 1.2;
        refrigerante = adults + children * 0.5;
        DOM.updateAmounts(carne, cerveja, refrigerante);
    }
}

const Form = {
    adults: document.querySelector("input#adults"),
    children: document.querySelector("input#children"),
    hours: document.querySelector("input#duration"),

    getValues() {
        return {
            adults: Form.adults.value,
            children: Form.children.value,
            hours: Form.hours.value,
        };
    },

    submit(event) {
        event.preventDefault();

        try {
            const { adults, children, hours } = Form.getValues();
            calculateAmounts(adults, children, hours);

            const results = document.querySelector(".container.results");
            results.style.display = "block";
            //
        } catch (error) {
            alert(error.message);
        }
    },
};

const Button = {
    reset() {
        const results = document.querySelector(".container.results");
        results.style.display = "none";
    },
};

console.clear();
