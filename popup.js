document.addEventListener('DOMContentLoaded', function () {
    const compileButton = document.getElementById('compileButton');
    const pythonCode = document.getElementById('pythonCode');
    const languageDropdown = document.getElementById('language');
    const output = document.getElementById('output');
  
    compileButton.addEventListener('click', function () {
      const code = pythonCode.value;
      const selectedLanguage = languageDropdown.value;
  
      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '5b5c4d4532msh2fa7a8250484ec3p129f3djsnad7e3e22ddc8',
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com',
        },
        processData: false,
        data: JSON.stringify({
          language: selectedLanguage,
          version: 'latest',
          code: code,
          input: null,
        }),
      };
  
      fetch(settings.url, {
        method: 'POST',
        headers: settings.headers,
        body: settings.data,
      })
        .then(response => response.json())
        .then(result => {
          const pythonOutput = result.output;
          output.textContent = pythonOutput; // Display the output
        })
        .catch(error => {
          output.textContent = 'Error occurred during execution.';
          console.error(error);
        });
    });
  });
  