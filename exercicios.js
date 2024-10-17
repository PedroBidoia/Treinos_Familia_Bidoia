const todosExercicios = {
    "peito": [
        { id: "supino_reto_halteres", nome: "Supino Reto com Halteres", imagem: "imgs/supino_reto_halteres.png", series: "4x12", descricao: "Pegue o banco, deixe reto, e empurre halteres para cima." },
        { id: "supino_reto_maq", nome: "Supino Reto Articulado", imagem: "imgs/supino_reto_maq.png", series: "4x12", descricao: "Vá até a maquina de supino. Lembre-se de estufar o peito." },
        { id: "supino_inclinado", nome: "Supino Inclinado", imagem: "imgs/supino_inclinado.png", series: "4x10", descricao: "Pegue o banco, deixe Inclinado, e empurre a barra para cima." },
        { id: "supino_inclinado_halteres", nome: "Supino Inclinado com Halteres", imagem: "imgs/supino_inclinado_halteres.png", series: "4x10", descricao: "Pegue o banco, deixe Inclinado, e empurre halteres para cima." }, 
        { id: "peckdeck_flexao", nome: "PeckDeck com Flexão", imagem: "imgs/peckdeck_flexao.png", series: "3x10+10", descricao: "Faça o PeckDeck e logo após faça uma série de flexão sem descanso" },
        { id: "pullover", nome: "Pull Over", imagem: "imgs/pullover.png", series: "3x10", descricao: "Deixe o banco reto, pegue o haltere, e faça o movimento sem dobrar o braço" }, 
        { id: "crucifixo_polia_flexao", nome: "PeckDeck com Flexão", imagem: "imgs/crucifixo_polia_flexao.png", series: "3x10+10", descricao: "Faça o crucifixo com as polias na altura dos ombros e logo após faça uma série de flexão sem descanso" },
        { id: "crossover", nome: "CrossOver", imagem: "imgs/crossover.png", series: "3x10", descricao: "Vá na polia, pegue os dois lados, leve para o alto, e empurre como se fosse uma barra" }
    ],
    "triceps": [
        { id: "triceps_corda", nome: "Tríceps Corda", imagem: "imgs/triceps_corda.png", series: "4x12", descricao: "Use a corda para estender os braços." },
        { id: "triceps_testa_polia", nome: "Tríceps Testa na Polia", imagem: "imgs/triceps_testa_polia.png", series: "4x12", descricao: "Coloque o triângulo na polia, na altura da cabeça, e faça como se fosse um testa com halteres" },
        { id: "triceps_barra_dropset", nome: "Tríceps Barra DropSet", imagem: "imgs/triceps_barra.png", series: "4x12", descricao: "Coloque a barrinha na polia, no alto, e na ultima, repete o exercicio diminuindo carga." },
        { id: "triceps_barra", nome: "Tríceps Barra", imagem: "imgs/triceps_barra.png", series: "4x12", descricao: "Coloque a barrinha na polia no alto e faça o movimento para baixo." },
        { id: "triceps_frances_polia", nome: "Tríceps Frances na Polia", imagem: "imgs/triceps_frances_polia.png", series: "4x12+12", descricao: "Desça a polia até o chão, e unilateralmente, faça o francês" },
        { id: "triceps_mergulho", nome: "Tríceps Mergulho", imagem: "imgs/triceps_mergulho.png", series: "4x12", descricao: "Vá até o banco, e apoiando nele, desça até quase o chão." }
    ],
    "costas": [
        { id: "puxada_alta_articulada", nome: "Puxada alta Articulada", imagem: "imgs/puxada_alta_articulada.png", series: "4x12", descricao: "Vá até a maquina de puxada articulada, e faça o movimento para baixo, 'Costas para trás'." },
        { id: "puxada_alta_militar", nome: "Puxada Militar", imagem: "imgs/puxada_alta_militar.jpg", series: "4x12", descricao: "Puxe a barra pela frente do corpo, com os cotovelos para frente." },
        { id: "remada_triangulo", nome: "Remada com o Triângulo", imagem: "imgs/remada_triangulo.jpg", series: "4x12", descricao: "Sente no banco, coloque o triângulo na parte de baixo e puxe para trás" },
        { id: "remada_articulada", nome: "Remada Articulada", imagem: "imgs/remada_articulada.jpg", series: "4x12", descricao: "Vá até a maquina, e puxe mantendo os cotovelos estaveis, peito estufado" }
    ],
    "biceps": [
        { id: "biceps_barrinha_polia", nome: "Biceps com a Barrinha na Polia", imagem: "imgs/biceps_barrinha_polia.jpg", series: "4x12", descricao: "Vá até a polia, coloque ela em baixo, coloque a barrinha e levante a barrinha, mantendo o cotovelo estavel." },
        { id: "rosca_alternada_pe", nome: "Rosca Alternada em Pé", imagem: "imgs/rosca_alternada_pe.jpg", series: "4x10+10", descricao: "Pegue dois pesos, e levante eles alternadamente" }
    ],
    "antebraço": [
        { id: "antebraco_barrinha_polia", nome: "Antebraço com a Barrinha na Polia", imagem: "imgs/antebraco_barrinha_polia.png", series: "4x12", descricao: "Vá até a polia, coloque ela em baixo, coloque a barrinha e levante a barrinha, segurando com a palma da mão para baixo." }    
    ],
    "pernas": [
        { id: "agachamento", nome: "Agachamento", imagem: "imgs/agachamento.jpg", series: "4x10", descricao: "Agache com a barra nas costas." }
    ],
    "ombros": [
        { id: "elevacao_lateral_pe", nome: "Elevação Lateral", imagem: "imgs/elevacao_lateral_pe.png", series: "4x12", descricao: "Pegue dois halteres e levante eles pelo lado até a altura dos ombros" },
        { id: "elevacao_frontal_halteres", nome: "Elevação Frontal com Halteres", imagem: "imgs/elevacao_frontal_halteres.png", series: "4x12", descricao: "Pegue dois halteres e levante eles pela frente até a altura dos ombros" }
    ],
    "body": [
        { id: "prancha", nome: "Prancha", imagem: "imgs/prancha.png", series: "4x Até a falha", descricao: "Fique apoiado pelo cotovelos e pelo pé, mantendo o corpo reto." }
    ]
    // Adicione mais grupos musculares e exercícios aqui
};
