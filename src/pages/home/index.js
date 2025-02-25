import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import video from '../../assets/home/video.mp4';

import './style.css';


const Home = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="home"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-item-img-1">
                            {/*<h1 style={{position: "relative", top: "20px", color: "black", textAlign: "center"}}>Espacio de sanación integral</h1>
                            <p style={{position: "relative", top: "20px", color: "whitesmoke", textAlign: "center", fontSize: "18px"}}>
                                
                            </p> */}
                        </div>
                        <div className="carousel-item carousel-item-img-2">
                        </div>
                        <div className="carousel-item carousel-item-img-3">
                        </div>
                        <div className="carousel-item carousel-item-img-4">
                        </div>
                        <div className="carousel-item carousel-item-img-5">
                        </div>
                        <div className="carousel-item carousel-item-img-6">
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container mt-5">
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-6">
                            <div className="home-container-description">
                                <h1 className="mb-4">¿Qué es Visión Holística?</h1>
                                <div className="text home-text-description" style={{textIndent: "0.5em"}}>
                                <p className="mb-0">
                                    Desde el año 2013 se comenzó a gestar una ORIGINAL PERSPECTIVA DE
                                    SANACIÓN fusionando dos grandes cosmovisiones que hasta el momento permanecían
                                    por caminos separados: la Medicina Tradicional China y El Cuarto Camino.
                                </p>
                                <p> 
                                    Este nuevo enfoque permite contemplar las diversas dimensiones del 
                                    Ser Humano (físico, mental, emocional, espiritual y energético).
                                </p>
                                </div>
                                <Link to="/vision-holistica" className="btn btn-dark text box-shadow py-1 px-2" style={{backgroundColor: "#1e4820", color: "white"}}>Seguir Leyendo</Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                        <video width="100%" height="auto" controls className="video-description box-shadow">
                            <source src={video} type="video/mp4" />
                        </video>
                        </div>
                    </div>
                    <h1 className="text-center mt-4">Áreas</h1>
                    <div className="row no-gutters home-buttons">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/psicologia">
                            <div className="home-category-box">
                                <div className="button-psico" />
                            </div>
                            <h3 className="text-center">Psicología</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/acupuntura">
                            <div className="home-category-box">
                                <div className="button-acup" />
                            </div>
                            
                            <h3 className="text-center">Acupuntura</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/metodo-sanacion-holistico">
                            <div className="home-category-box button-metod" />
                            <h3 className="text-center">Metodo Sanación Holístico</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/masajes">
                            <div className="home-category-box button-masaj" />
                            <h3 className="text-center">Masajes</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/taichichuan">
                            <div className="home-category-box button-taichi" />
                            <h3 className="text-center">Taijiquan</h3>
                            <h3 className="text-center">(Taichichuan)</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/chikung">
                            <div className="home-category-box button-qui" />
                            <h3 className="text-center">Qigong</h3>
                            <h3 className="text-center">(Chikung)</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/instructorado">
                            <div className="home-category-box">
                                <div className="button-instru" />
                            </div>
                            <h3 className="text-center">Instructorado</h3>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Link to="/grupo-lectura">
                            <div className="home-category-box">
                                <div className="button-lect" />
                            </div>
                            <h3 className="text-center">Grupo de Lectura</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;