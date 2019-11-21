class Validator {
    constructor({
        selector,
        pattern = {},
        method,
    }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== `button` && item.type !== `button`;
        });
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener(`change`, this.chekIt.bind(this)));
        this.form.addEventListener(`submit`, e => {
            e.preventDefault();
            if (!this.error.size && !this.elementsForm.forEach(elem => this.chekIt({target: elem})) &&
                (this.elementsForm.forEach(elem => elem.value) === '')) {
                e.preventDefault();
                
            } 
        });
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };
        if (this.method) {
            const method = this.method[elem.id];

            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        }

        return true;
    }

    chekIt(event) {
        const target = event.target;

        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove(`success`);
        elem.classList.add(`error`);

        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains(`validator-error`)) {
            return;
        }
        const errorDiv = document.createElement(`div`);
        errorDiv.textContent = `Ошибка в этом поле`;
        errorDiv.classList.add(`validator-error`);
        elem.insertAdjacentElement(`afterend`, errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove(`error`);
        elem.classList.add(`success`);
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains(`validator-error`)) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement(`style`);
        style.textContent = `
        input.success {
            border: 2px solid green !important
        }
        input.error {
            border: 2px solid red !important
        }
        .validator-error {
            position: absolute;
            left: 50%;
            transform: translateY(-25px);
            font-family: sans-serif;
            font-size: 10px;
            color: red
        }
        `;
        document.head.appendChild(style);
    }

    setPattern() {
        if (!this.pattern.phone) {
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }

        if (!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }

        if (!this.pattern.text) {
            this.pattern.text = /^[а-яА-ЯёЁ]*$/;
        }

    }
}

const valid1 = new Validator({
    selector: `#form1`,
    pattern: {},
    method: {
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form1-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
    }
});
valid1.init();

const valid2 = new Validator({
    selector: `#form2`,
    pattern: {},
    method: {
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
        'form2-message': [
            ['pattern', 'text']
        ]
    }
});
valid2.init();

const valid3 = new Validator({
    selector: `#form3`,
    pattern: {},
    method: {
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form3-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
    }
});
valid3.init();