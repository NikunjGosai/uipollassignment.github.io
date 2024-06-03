document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('results');

    const voteForm = document.getElementById('voteForm');
    const results = {
        'question1': {
            'HTML': 0,
            'CSS': 0,
            'JAVASCRIPT': 0
        },
        'question2': {
            'CRICKET': 0,
            'FOOTBALL': 0,
            'HOCKEY': 0
        }
    };

    updateResults();

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedOption1 = voteForm.elements['question1'].value;
        const selectedOption2 = voteForm.elements['question2'].value;
        if (selectedOption1 && selectedOption2) {
            results['question1'][selectedOption1]++;
            results['question2'][selectedOption2]++;
            localStorage.setItem('results', JSON.stringify(results));
            updateResults();
        }
    });

    // Disable button
    const submitButton = voteForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // enable button after select the answer
    voteForm.addEventListener('change', () => {
        const selectedOption1 = voteForm.elements['question1'].value;
        const selectedOption2 = voteForm.elements['question2'].value;
        if (selectedOption1 && selectedOption2) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    function updateResults() {
        document.getElementById('question1-option1').querySelector('span').textContent = results['question1']['HTML'];
        document.getElementById('question1-option2').querySelector('span').textContent = results['question1']['CSS'];
        document.getElementById('question1-option3').querySelector('span').textContent = results['question1']['JAVASCRIPT'];
        document.getElementById('question2-option1').querySelector('span').textContent = results['question2']['CRICKET'];
        document.getElementById('question2-option2').querySelector('span').textContent = results['question2']['FOOTBALL'];
        document.getElementById('question2-option3').querySelector('span').textContent = results['question2']['HOCKEY'];
    }
});