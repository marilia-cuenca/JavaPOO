package batalhadeemojis;

public class Lutador {
	
	//Atributos
	private String nome;
	private String nacionalidade;
	private int idade;
	private float altura;
	private float peso;
	private String categoria;
	private int vitorias;
	private int derrotas;
	private int empates;
	
	
	// Métodos abstratos
	public void apresentar() {
		System.out.println("-------------------------------------------------");
		System.out.println("CHEGOU A HORA! Apresentamos o lutador " + this.getNome());
		System.out.println("Diretamente de " + this.getNacionalidade());
		System.out.println("com " + this.getIdade() + " anos e " + this.getAltura() + " m de altura");
		System.out.println("Pesando " + this.getPeso() + " kg");
		System.out.println("E faz parte da categoria " + this.getCategoria());
		System.out.println("Ganhou " + this.getVitorias() + " lutas");
		System.out.println("Perdeu " + this.getDerrotas() + " lutas");
		System.out.println("Empatou " + this.getEmpates() + " lutas");
		System.out.println("-------------------------------------------------");
	}
	
	public void status() {
		System.out.println(this.getNome());
		System.out.println(this.getVitorias() + " vitórias");
		System.out.println(this.getDerrotas() + " derrotas");
		System.out.println(this.getEmpates() + " empates");
	}
	
	public void ganharLuta() {
		this.setVitorias(getVitorias() + 1);
	}
	
	public void perderLuta () {
		this.setDerrotas(getDerrotas() + 1);
	}
	
	public void empatarLuta() {
		this.setEmpates(getEmpates() + 1);
	}

	
	// Métodos construtores
	public Lutador(String nome, String nacionalidade, int idade, float altura, float peso, String categoria, int vitorias, int derrotas,
			int empates) {
		super();
		this.nome = nome;
		this.nacionalidade = nacionalidade;
		this.idade = idade;
		this.altura = altura;
		this.peso = peso;
		this.categoria = categoria;
		this.vitorias = vitorias;
		this.derrotas = derrotas;
		this.empates = empates;
	}
	
	
	// Métodos especiais
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNacionalidade() {
		return nacionalidade;
	}

	public void setNacionalidade(String nacionalidade) {
		this.nacionalidade = nacionalidade;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
		this.setCategoria(categoria);
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		
		if (this.peso < 52.2) {
			this.categoria = "Inválido";
			
		} else if (this.peso <= 70.3) {
			this.categoria = "Leve";
			
		} else if (this.peso <= 83.9) {
			this.categoria = "Médio";
			
		} else if (this.peso <= 120.2) {
			this.categoria = "Pesado";
			
		} else {
			this.categoria = "Inválido";
		}
		
	}

	public int getVitorias() {
		return vitorias;
	}

	public void setVitorias(int vitorias) {
		this.vitorias = vitorias;
	}

	public int getDerrotas() {
		return derrotas;
	}

	public void setDerrotas(int derrotas) {
		this.derrotas = derrotas;
	}

	public int getEmpates() {
		return empates;
	}

	public void setEmpates(int empates) {
		this.empates = empates;
	}
	
	
}

