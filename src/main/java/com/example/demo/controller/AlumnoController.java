/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.controller;

import com.example.demo.model.Alumno;
import com.example.demo.model.Facultad;
import com.example.demo.repository.AlumnoRepository;
import com.example.demo.repository.FacultadRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.xml.ws.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 *
 * @author benjamin
 */
@RestController
@RequestMapping("/alumno")
public class AlumnoController {

    @Autowired
    private AlumnoRepository alumnoRepository;

    @Autowired
    private FacultadRepository facultadRepository;

    @RequestMapping(value = "/all", method = GET)
    public ResponseEntity<List<Alumno>> list() {
        try {
            List<Alumno> alumnos = alumnoRepository.findAll();
            return ResponseEntity.ok(alumnos);
        } catch (ResourceNotFoundException rnfe) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    @RequestMapping(value = "/allByFacultad/{id_facultad}", method = GET)
    public ResponseEntity<List<Alumno>> listByFacultad(@PathVariable String id_facultad) {
        try {
            Long idFacultad = Long.parseLong(id_facultad);
            List<Alumno> alumnos = alumnoRepository.findAll();
            List<Alumno> result = new ArrayList<>();
            for (Alumno x : alumnos) {
                if (x.getFacultad().getIdFacultad() == idFacultad) {
                    result.add(x);
                }
            }
            return ResponseEntity.ok(result);
        } catch (ResourceNotFoundException rnfe) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    @RequestMapping(value = "/{id}", method = GET)
    public ResponseEntity<Alumno> get(@PathVariable String id) {
        try {
            Alumno alumno = alumnoRepository.findOne(Long.parseLong(id));
            return ResponseEntity.ok(alumno);
        } catch (ResourceNotFoundException rnfe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> put(@PathVariable String id, @RequestBody Object input) {
        return null;
    }

    @RequestMapping(value = "/addAlumno", method = POST)
    public ResponseEntity<Alumno> post(@RequestBody Alumno input) {
        try {
            return ResponseEntity.ok(alumnoRepository.saveAndFlush(input));
        } catch (ResourceNotFoundException rnfe) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
    }

    @RequestMapping(value = "/{id}", method = DELETE)
    public ResponseEntity<Object> delete(@PathVariable String id) {
        return null;
    }
    
    public static int suma(int x, int y) {
        return x + y;
    }

}
