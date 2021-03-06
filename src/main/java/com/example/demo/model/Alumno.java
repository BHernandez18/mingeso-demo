/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 *
 * @author benjamin
 */
@Entity
@Table(name = "alumno")
public class Alumno implements Serializable {

    public Alumno() {
    }

    public Alumno(Long idAlumno, String rut, String nombre, String correo, int ingreso, Facultad facultad) {
        this.idAlumno = idAlumno;
        this.rut = rut;
        this.nombre = nombre;
        this.correo = correo;
        this.ingreso = ingreso;
        this.facultad = facultad;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_alumno")
    private Long idAlumno;

    @Column(name = "rut")
    @NotNull
    private String rut;

    @Column(name = "nombre")
    @NotNull
    private String nombre;

    @Column(name = "correo")
    private String correo;

    @Column(name = "ingreso")
    @NotNull
    private int ingreso;

    @ManyToOne
    @JoinColumn(name = "facultad_id", referencedColumnName = "id_facultad")
    private Facultad facultad;

//    @ManyToMany
//    @JoinTable(
//            name = "alumno_facultad",
//            joinColumns = {
//                @JoinColumn(name = "alumno_id", referencedColumnName = "id_alumno")},
//            inverseJoinColumns = {
//                @JoinColumn(name = "facultad_id", referencedColumnName = "id_facultad")}
//    )
//    @JsonIgnoreProperties("alumnos")
//    private Set<Facultad> facultades;
    public Long getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(Long idAlumno) {
        this.idAlumno = idAlumno;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public int getIngreso() {
        return ingreso;
    }

    public void setIngreso(int ingreso) {
        this.ingreso = ingreso;
    }

//    public Set<Facultad> getFacultades() {
//        return facultades;
//    }
//
//    public void setFacultades(Set<Facultad> facultades) {
//        this.facultades = facultades;
//    }
    public Facultad getFacultad() {
        return facultad;
    }

    public void setFacultad(Facultad facultad) {
        this.facultad = facultad;
    }

}
