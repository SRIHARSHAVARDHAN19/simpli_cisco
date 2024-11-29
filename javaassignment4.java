package cisco.java.program;

class Demo {
    
    private int empid=90;
    private String name="Ravi";
    private int age=56;
    private float salary= 4500.50f;
    
    public int getEmpid() {
        return empid;
    }
    
    public void setEmpid(int empid) {
        this.empid = empid;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public float getSalary() {
        return salary;
    }
    
    public void setSalary(float salary) {
        this.salary = salary;
    }
}
public class Encapculation{
    
    public static void main(String args[])
    {
        Demo ob = new Demo();
        
        int y = ob.getEmpid();
        System.out.println(y);
        
        ob.setSalary(50000.50f); 
        float new_sal = ob.getSalary();
        System.out.println(new_sal);
    }
}
