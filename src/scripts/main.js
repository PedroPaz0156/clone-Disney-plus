document.addEventListener('DOMContentLoaded', function() { 
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    
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

    for (let i = 0; i < questions.length; i++) { 
        questions[i].addEventListener('click', openOrClosesAnswers);
    }
})

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