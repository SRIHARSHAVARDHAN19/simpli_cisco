package cisco.java.program;

public class Shape {
	
	int s, l, b;
	float r;
	public Shape(int l,int b,int s,float r){
		this.l=l;
		this.b=b;
		this.s=s;
		this.r=r;
	}
	public Shape(int s){
		this.s=s;
	}
	public Shape(int l,int b){
		this.l=l;
		this.b=b;
	}
	public Shape(float r){
		this.r=r;
	}
	public int square_area(){
		int res1=s*s;
		return res1;
	}
	public int rectangle_area(){
		int res2=l*b;
		return res2;
	}
	public float circle_area(){
		float res3=3.14f*r;
		return res3;
	}
	
	public static void main(String[] args) {
		
		Shape s1=new Shape(10);
		Shape s2=new Shape(20,30);
		Shape s3=new Shape(10.5f);
		
		int result1=s1.square_area();
		int result2=s2.rectangle_area();
		float result3=s3.circle_area();
		System.out.println(result1);
		System.out.println(result2);
		System.out.println(result3);

	}

}
