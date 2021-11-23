const DOM = {
    carne: document.querySelector(".container.results ul").children[0],
    cerveja: document.querySelector(".container.results ul").children[1],
    refrigerante: document.querySelector(".container.results ul").children[2],

    updateAmounts(carne, cerveja, refrigerante) {
        DOM.carne.textContent = `🥩 ${carne} kgs de carne`;
        DOM.cerveja.textContent = `🍺 ${cerveja} litros de cerveja`;
        DOM.refrigerante.textContent = `🥤 ${refrigerante} litros de refrigerante`;
    },

    showResults() {
        const results = document.querySelector(".container.results");
        results.style.display = "block";
    },
};

const Utils = {
    calculateAmounts(adults, children, hours) {
        adults = Number(adults);
        children = Number(children);
        hours = Number(hours);

        if (isNaN(adults) || isNaN(children) || isNaN(hours)) {
            throw new Error("Por favor, entre um valor numérico");
        }

        if (adults < 0 || children < 0 || hours < 0) {
            throw new Error("Por favor, entre um valor positivo");
        }

        var carne, cerveja, refrigerante;
        if (hours < 6) {
            carne = (adults + children * 0.5) * 0.4;
            cerveja = adults * 1.2;
            refrigerante = (adults + children * 0.5) * 1.0;
        } else {
            carne = (adults + children * 0.5) * 0.65;
            cerveja = adults * 2;
            refrigerante = (adults + children * 0.5) * 1.5;
        }

        carne = carne.toFixed(2)
        cerveja = cerveja.toFixed(2)
        refrigerante = refrigerante.toFixed(2)

        return { carne, cerveja, refrigerante };
    },
};

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
            const { carne, cerveja, refrigerante } = Utils.calculateAmounts(
                adults,
                children,
                hours
            );
            console.log("desest", carne, cerveja, refrigerante);
            DOM.updateAmounts(carne, cerveja, refrigerante);
            DOM.showResults();
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
