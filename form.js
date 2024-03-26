document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input-weight');
    const planetField = document.getElementById('planet');
    const outputField = document.getElementById('output-weight');
    const form = document.getElementById('weight-converter');
  
    const gravityFactors = {
      Mercury: 0.38,
      Venus: 0.91,
      Earth: 1,
      Mars: 0.38,
      Jupiter: 2.34,
      Saturn: 1.06,
      Uranus: 0.92,
      Neptune: 1.19
    };
  
    function convertWeight(weight, planet) {
      return weight * gravityFactors[planet];
    }
  
    form.addEventListener('input', () => {
      const inputWeight = parseFloat(inputField.value);
      const planet = planetField.value;
  
      const outputWeight = convertWeight(inputWeight, planet);
      outputField.value = `Your weight on ${planet} is ${outputWeight.toFixed(2)} kg`;
    });
  });
  document.addEventListener('DOMContentLoaded', (event) => {
    // Elements
    const inputField = document.getElementById('input-weight');
    const planetField = document.getElementById('planet');
    const resetButton = document.getElementById('reset-button');
  
    // Event to save data on input change
    inputField.addEventListener('input', () => {
      localStorage.setItem('inputWeight', inputField.value);
    });
  
    planetField.addEventListener('change', () => {
      localStorage.setItem('selectedPlanet', planetField.value);
    });
  
    // Load any saved data from localStorage
    if (localStorage.getItem('inputWeight')) {
      inputField.value = localStorage.getItem('inputWeight');
    }
  
    if (localStorage.getItem('selectedPlanet')) {
      planetField.value = localStorage.getItem('selectedPlanet');
    }
  
    // Reset button event listener
    resetButton.addEventListener('click', () => {
      // Clear the local storage
      localStorage.removeItem('inputWeight');
      localStorage.removeItem('selectedPlanet');
  
      // Reset the form fields
      inputField.value = '';
      planetField.selectedIndex = 0; // Resets to the first option
    });
  });
  
  