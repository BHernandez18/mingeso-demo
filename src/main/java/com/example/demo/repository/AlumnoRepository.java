/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repository;

import java.util.List;
import javax.transaction.Transactional;
import com.example.demo.model.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author benjamin
 */
@Transactional
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {

}
