/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo;

/*
import de junit
*/
import com.example.demo.controller.AlumnoController;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
/**
 *
 * @author diego
 */
@RunWith(JUnit4.class)
public class JUnitExampleTest {
    
    @Test
    public void tes(){
    int n1=1;
    int n2=2;
    int total=3;
    int sumas=AlumnoController.suma(n1,n2);
    Assert.assertEquals(sumas,total);
    }
}
