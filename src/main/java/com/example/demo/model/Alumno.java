/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_alumno")
    @NotNull
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

    @ManyToMany
    @JoinTable(
            name = "alumno_facultad",
            joinColumns = {
                @JoinColumn(name = "alumno_id", referencedColumnName = "id_alumno")},
            inverseJoinColumns = {
                @JoinColumn(name = "facultad_id", referencedColumnName = "id_facultad")}
    )
    //@JsonBackReference
    @JsonIgnoreProperties("alumnos")
    private Set<Facultad> facultades;

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
    
    public Set<Facultad> getFacultades() {
        return facultades;
    }

    public void setFacultades(Set<Facultad> facultades) {
        this.facultades = facultades;
    }

}
