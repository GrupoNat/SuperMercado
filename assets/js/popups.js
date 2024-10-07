////document.addEventListener("DOMContentLoaded", function() {
    const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Luiz", "Fernanda", "Richard","Cristina","Hyara","Nicole","Igor","Nathan","Talita","Talita","Ângela","Ângela","Luciana","Daniella","Daniella","Suzana","Raul","Enzo","Levi","Cesar","Luana Martins","Adriano F","Ryan Gabriel","Davi", "Isabela", "Gustavo", "Sofia", "Gabriel", "Mariana", "Felipe", "Juliana", "Victor", "Lara", "Ricardo", "Camila", "André", "Bruna", "Mateus", "Paula", "Thiago", "Renata", "Eduardo", "Patrícia", "Alex", "Bianca", "Marcelo", "Daniela", "Vitor", "Rafaela", "Rafael", "Melissa", "Bruno", "Carla", "Rodrigo", "Beatriz", "Leonardo", "Sara", "Guilherme", "Aline","Francisco", "Natália", "Diego", "Débora", "Paulo", "Eliana", "Hugo", "Viviane", "Fábio", "Larissa", "Cláudio", "Cecília", "Vinícius", "Regina", "Márcio", "Verônica", "Renan", "Clarissa", "Lucas", "Joana", "Murilo", "Iara", "Antônio", "Marta", "Ronaldo", "Cristiane", "Fernando", "Silvia", "Miguel", "Tainá", "Adriano", "Gláucia", "Arthur", "Gabriela", "Rogério", "Juliana", "Augusto", "Márcia", "Otávio", "Emanuela", "Alexandre", "Tatiane", "Sérgio", "Mônica", "João Paulo", "Daniela Silva", "Emerson", "Jéssica", "Wesley", "Tatiana", "Breno", "Caroline", "Cláudia",  "Cláudia", "Jaqueline", "Raquel", "Douglas", "Luciana Souza", "Nelson", "Paloma", "Alexsandro", "Roberta", "Caio", "Adriana", "Maurício", "Sandra", "Giovanni", "Tamara", "Wellington", "Letícia", "Rogério Mendes", "Priscila", "Cauã", "Mirella", "Rômulo", "Julieta", "Sebastião", "Ingrid", "Nicolas", "Samara", "Fabrício", "Luísa", "Joaquim", "Helena", "José", "Isis", "Ivan", "Sônia", "Emanuel", "Sabrina", "Rafael Silva", "Adriana Lima", "Elias", "Marina", "Alessandro", "Cátia", "Henrique", "Mariane","Jorge", "Tatiane Silva", "Márcio Souza", "Yasmin", "Pedro Henrique", "Fernanda Gomes", "Antônia", "Carolina", "Ester", "Renato", "Cristina Lima", "Andressa", "Vânia", "Leonel", "Amanda", "Vicente", "Caroline Souza", "João Pedro", "Luciano", "Cristina Santos", "Rita", "Jonas", "Camila Souza", "Saulo", "Marcos", "Túlio", "Isabel", "Luiz Felipe", "Débora Lima", "Eduarda", "Sandro", "Talita Souza", "André Lima", "Cláudia Santos", "Carlos Eduardo", "Heloísa", "César Lima", "Luan", "Verônica Lima", "Mário", "Giovanna", "Luciano Souza", "Elisa", "Igor batista","Daiana", "Vitor Lima", "Simone", "Túlio Souza", "Giovana Lima", "Rodrigo Lima", "Letícia Souza", "Adriana Souza", "Gustavo Santos", "Vinícius Lima", "Renato Souza", "Ana Paula", "Mauro", "Bruninha","vagner"];
    const popUpContainer = document.getElementById('popUpContainer');
    const maxNames = names.length;
    let usedNames = [];
  
    function generateUniqueName() {
        if (usedNames.length >= maxNames) {
            usedNames = []; // Resetar se todos os nomes foram usados
        }
        let randomName;
        do {
            randomName = names[Math.floor(Math.random() * names.length)];
        } while (usedNames.includes(randomName));
        usedNames.push(randomName);
        return randomName;
    }
  
    function createPopUp(message) {
        const popUp = document.createElement('div');
        popUp.className = 'pop-up';
        popUp.textContent = message;
        popUpContainer.appendChild(popUp);
  
        // Remove pop-up após a animação
        setTimeout(() => {
            popUp.remove();
        }, 5000);
    }
  
    function generatePopUps() {
        setInterval(() => {
            const name = generateUniqueName();
            createPopUp(`${name} Acabou de baixar o APP NAYARA!`);
        }, 10000); // Novo pop-up a cada 3 segundos
    }
    
    function generatePopUps() {
        setInterval(() => {
            const name = generateUniqueName();
            createPopUp(`${name} Esta Na loja Virtual Realizando uma Compra!`);
        }, 10000); // Novo pop-up a cada 3 segundos
    }
  
    function setupPlanButtons() {
        document.getElementById('basicPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Básico!`);
        });
  
        document.getElementById('premiumPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Premium!`);
            // Pop-up adicional para o plano Premium
            createPopUp(`Muitas pessoas estão assinando o Plano Premium agora!`);
        });
  
        document.getElementById('elitePlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Elite!`);
        });
    }
  
    generatePopUps();
    setupPlanButtons();
  });


  document.addEventListener("DOMContentLoaded", function() {
    const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Luiz", "Fernanda", "Richard","Cristina","Hyara","Nicole","Igor","Nathan","Talita","Talita","Ângela","Ângela","Luciana","Daniella","Daniella","Suzana","Raul","Enzo","Levi","Cesar","Luana Martins","Adriano F","Ryan Gabriel","Davi", "Isabela", "Gustavo", "Sofia", "Gabriel", "Mariana", "Felipe", "Juliana", "Victor", "Lara", "Ricardo", "Camila", "André", "Bruna", "Mateus", "Paula", "Thiago", "Renata", "Eduardo", "Patrícia", "Alex", "Bianca", "Marcelo", "Daniela", "Vitor", "Rafaela", "Rafael", "Melissa", "Bruno", "Carla", "Rodrigo", "Beatriz", "Leonardo", "Sara", "Guilherme", "Aline","Francisco", "Natália", "Diego", "Débora", "Paulo", "Eliana", "Hugo", "Viviane", "Fábio", "Larissa", "Cláudio", "Cecília", "Vinícius", "Regina", "Márcio", "Verônica", "Renan", "Clarissa", "Lucas", "Joana", "Murilo", "Iara", "Antônio", "Marta", "Ronaldo", "Cristiane", "Fernando", "Silvia", "Miguel", "Tainá", "Adriano", "Gláucia", "Arthur", "Gabriela", "Rogério", "Juliana", "Augusto", "Márcia", "Otávio", "Emanuela", "Alexandre", "Tatiane", "Sérgio", "Mônica", "João Paulo", "Daniela Silva", "Emerson", "Jéssica", "Wesley", "Tatiana", "Breno", "Caroline", "Cláudia",  "Cláudia", "Jaqueline", "Raquel", "Douglas", "Luciana Souza", "Nelson", "Paloma", "Alexsandro", "Roberta", "Caio", "Adriana", "Maurício", "Sandra", "Giovanni", "Tamara", "Wellington", "Letícia", "Rogério Mendes", "Priscila", "Cauã", "Mirella", "Rômulo", "Julieta", "Sebastião", "Ingrid", "Nicolas", "Samara", "Fabrício", "Luísa", "Joaquim", "Helena", "José", "Isis", "Ivan", "Sônia", "Emanuel", "Sabrina", "Rafael Silva", "Adriana Lima", "Elias", "Marina", "Alessandro", "Cátia", "Henrique", "Mariane","Jorge", "Tatiane Silva", "Márcio Souza", "Yasmin", "Pedro Henrique", "Fernanda Gomes", "Antônia", "Carolina", "Ester", "Renato", "Cristina Lima", "Andressa", "Vânia", "Leonel", "Amanda", "Vicente", "Caroline Souza", "João Pedro", "Luciano", "Cristina Santos", "Rita", "Jonas", "Camila Souza", "Saulo", "Marcos", "Túlio", "Isabel", "Luiz Felipe", "Débora Lima", "Eduarda", "Sandro", "Talita Souza", "André Lima", "Cláudia Santos", "Carlos Eduardo", "Heloísa", "César Lima", "Luan", "Verônica Lima", "Mário", "Giovanna", "Luciano Souza", "Elisa", "Igor batista","Daiana", "Vitor Lima", "Simone", "Túlio Souza", "Giovana Lima", "Rodrigo Lima", "Letícia Souza", "Adriana Souza", "Gustavo Santos", "Vinícius Lima", "Renato Souza", "Ana Paula", "Mauro", "Bruninha","vagner"];
    const popUpContainer = document.getElementById('popUpContainer');
    const maxNames = names.length;
    let usedNames = [];
  
    function generateUniqueName() {
        if (usedNames.length >= maxNames) {
            usedNames = []; // Resetar se todos os nomes foram usados
        }
        let randomName;
        do {
            randomName = names[Math.floor(Math.random() * names.length)];
        } while (usedNames.includes(randomName));
        usedNames.push(randomName);
        return randomName;
    }
  
    function createPopUp(message) {
        const popUp = document.createElement('div');
        popUp.className = 'pop-up';
        popUp.textContent = message;
        popUpContainer.appendChild(popUp);
  
        // Remove pop-up após a animação
        setTimeout(() => {
            popUp.remove();
        }, 5000);
    }
  
    function generatePopUps() {
        setInterval(() => {
            const name = generateUniqueName();
            createPopUp(`${name} Acabou de baixar o APP NAYARA!`);
        }, 15000); // Novo pop-up a cada 3 segundos
    }
    
   
  
    function setupPlanButtons() {
        document.getElementById('basicPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Básico!`);
        });
  
        document.getElementById('premiumPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Premium!`);
            // Pop-up adicional para o plano Premium
            createPopUp(`Muitas pessoas estão assinando o Plano Premium agora!`);
        });
  
        document.getElementById('elitePlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Elite!`);
        });
    }
  
    generatePopUps();
    setupPlanButtons();
  });