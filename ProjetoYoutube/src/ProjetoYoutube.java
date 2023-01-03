
public class ProjetoYoutube {

	public static void main(String[] args) {
		
		Video v[] = new Video[3];
		v[0] = new Video("Aula 01 de POO");
		v[1] = new Video("Aula 12 de PHP");
		v[2] = new Video("Aula 10 de HTML5");
		

		Aluno a[] = new Aluno[2];
		a[0] = new Aluno("Jubileu", 22, "M", 0, "juba");
		a[1] = new Aluno("Marcia", 17, "F", 0, "marcinha");
		
		Visualizacao vis[] = new Visualizacao[5];
		vis[0] = new Visualizacao(a[0], v[2]);
		vis[0].avaliar();
		System.out.println(vis[0].toString());
		
		vis[1] = new Visualizacao(a[0], v[1]);
		vis[0].avaliar(87.0f);
		System.out.println(vis[1].toString());
		
		System.out.println("VÍDEOS\n--------------------------");
		System.out.println(v[0].toString());
		System.out.println(v[1].toString());
		System.out.println(v[2].toString());
		System.out.println("");
		System.out.println("ALUNOS\n--------------------------");
		System.out.println(a[0].toString());
		System.out.println(a[1].toString());
		
	}

}
