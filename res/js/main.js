const cloud = "https://i.pinimg.com/originals/ac/8b/e0/ac8be0225e5065bc72438cecb6685a63.jpg";
const flygun = "https://i.redd.it/o7vk0jgkvwa31.png";
const vojta = "https://i.redd.it/s999x5lo3y351.jpg";

const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.getElementById('button');
const result = document.getElementById('result');

const calculate = () => {
    result.innerHTML = "";

    const heightNum = parseInt(height.value);
    const weightNum = parseInt(weight.value);

    if (heightNum < 0 || heightNum === '' || isNaN(heightNum)) return result.innerHTML += "<p>Neplatná výška</p>";
    if (weightNum < 0 || weightNum === '' || isNaN(weightNum)) return result.innerHTML += "<p>Neplatná váha</p>";

    const bmi = (weightNum / ((heightNum * heightNum) / 10000)).toFixed(2);

    result.innerHTML += `<p>Tvoje BMI: ${bmi}</p>`;
    if (bmi < 18.5) return result.innerHTML += `<img src="${cloud}">`;
    if (bmi < 24.9) return result.innerHTML += `<img src="${flygun}">`;
    result.innerHTML += `<img src="${vojta}">`;
}

button.onclick = calculate;