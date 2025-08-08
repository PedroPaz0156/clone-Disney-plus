document.addEventListener('DOMContentLoaded', function() { 
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() { 
        const scrollPosition = window.scrollY;

        if(scrollPosition < heroHeight) { 
            hideHeaderElements();
        } else { 
            showHeaderElements();
        }
    })

    //seção de atrações, programação de abas
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(button) { 
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            hideAllActiveButtons();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
    //seção FAQ, sistema de accordion
    for (let i = 0; i < questions.length; i++) { 
        questions[i].addEventListener('click', openOrClosesAnswers);
    }
})

//funções
function openOrClosesAnswers(element) { 
    const class1 = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(class1);
}

function hideAllTabs() { 
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0; i < tabsContainer.length; i++) { 
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function hideAllActiveButtons() { 
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i < buttons.length; i++) { 
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideHeaderElements() { 
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() { 
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}