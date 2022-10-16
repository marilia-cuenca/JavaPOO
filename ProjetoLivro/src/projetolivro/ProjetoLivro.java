package projetolivro;

public class ProjetoLivro {

	public static void main(String[] args) {
		
		Pessoa[] p = new Pessoa [2];
		Livro[] l = new Livro[3];
		
		p[0] = new Pessoa("Marilia", 28, "F");
		p[1] = new Pessoa("Thiago", 39, "M");
		
		l[0] = new Livro("Aprendendo Java", "José da Silva", 300, 0, false, p[0]);
		l[1] = new Livro("POO para Iniciantes", "Pedro Paulo", 500, 0, false, p[1]);
		l[2] = new Livro("Java Avançado", "Maria Candido", 800, 0, false, p[0]);

		l[0].abrir();
		l[0].folhear(101);
		l[0].avançarPagina();
		System.out.println(l[0].detalhes());
		
	}

}
