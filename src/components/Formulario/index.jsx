import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [Nome, setNome] = useState('');
    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);
    const [Mensagem, setMensagem] = useState('');
    const [corClasse, setCorClasse] = useState(''); //

    const handleSubmit = (event) => {
        event.preventDefault(); // 
        calculoImc();
    };

    const calculoImc = () => {
        const calculoImc = parseFloat(Peso / (Altura * Altura));
        let mensagem = '';

        if (calculoImc <= 16.9) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} você está muito abaixo do peso!`;
            setCorClasse('muito-abaixo-peso');
        } else if (calculoImc >= 17 && calculoImc <= 18.4) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} você está abaixo do peso!`;
            setCorClasse('abaixo-peso');
        } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} Parabéns! Você está no peso ideal =)`;
            setCorClasse('peso-ideal');
        } else if (calculoImc >= 25 && calculoImc <= 29.9) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} você está acima do peso!`;
            setCorClasse('acima-peso');
        } else if (calculoImc >= 30 && calculoImc <= 34.9) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} Obesidade grau I`;
            setCorClasse('obesidade-i');
        } else if (calculoImc >= 35 && calculoImc <= 40) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} Obesidade grau II`;
            setCorClasse('obesidade-ii');
        } else if ( calculoImc > 40 ) {
            mensagem = `Olá ${Nome}, seu índice de massa corporal é de: ${calculoImc.toFixed(2)} Obesidade grau III`;
            setCorClasse('obesidade-iii');
        } else {
            mensagem = `Olá ${Nome}, os campos de preenchimento não foram inseridos corretamente. `
            setCorClasse('obesidade-iii');
        }

        setMensagem(mensagem);
    };

    return (
        <div className={styles.resultado}>
            <h1>Bem-vindo a sua calculadora de imc!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className={styles.input} placeholder="Digite seu nome:" onChange={(evento) => setNome(evento.target.value)} />
                <input className={styles.input} placeholder="Digite seu peso:" onChange={(evento) => setPeso(parseFloat(evento.target.value))} />
                <input className={styles.input} placeholder="Digite sua altura:" onChange={(evento) => setAltura(parseFloat(evento.target.value))} />
                <button className={styles.btn} type="submit">Calcular</button>
            </form>
            <p className={`${styles.corClasse} ${styles[corClasse]}`}>{Mensagem}</p>
        </div>
    );
};

export default Formulario;
