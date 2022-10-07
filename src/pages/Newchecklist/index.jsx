import React, { useState } from 'react';
import './style.scss';
import CustomButton from '../../components/CustomButton';
import Grid from '@mui/material/Unstable_Grid2';
import BlueBlock from '../../components/BlueBolck';
import iconData from '../../assets/images/icon-data.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconTrash from '../../assets/images/icon-trash.png'
import iconDetail from '../../assets/images/icon-detail.png'
import { IconButton } from '@material-ui/core';
import Button from '@mui/material/Button';

const types_default = ['Titolo', 'Stato', 'Priorità', 'Percentuale di avanzamento', 'Data di scadenza'];
const types_free = ['Numero', 'Testo breve', 'Descrizione', 'Data', 'Orario', 'Scelta singola', 'Scelta multipla'];

const Newchecklist = () => {

    const [activeDefault, setActiveDefault] = useState("");
    const [activeFree, setActiveFree] = useState("");

    const [numberVal, setNumberVal] = useState('');
    const [choiceVal, setChoiceVal] = useState('');
    const [optionsVal, setOptionsVal] = useState('');
    const [btnActive, setBtnActive] = useState('');

    const IsFilled = () => {
        if (numberVal  && choiceVal && optionsVal)  setBtnActive("true");                   
        else setBtnActive("false");
    }

    return (
        <>
            <div className='tag-section'>
                <p className='text-breadcrumb'>Nuovo Checklist/Verbale</p>
                <div className='tag-section-items'>
                    <input className='input-checklist' placeholder='Inserisci il nome del verbale*' />
                    <CustomButton name="Anteprima" bgColor="tertiary" />
                </div>
            </div>
            <div className='content-section'>
                <Grid container spacing={2}>
                    <Grid xs={3} md={3}>
                        <div className='card-newchecklist'>
                            <p className='title'>Aggiunigi campo</p>
                            <p className='sub-title my-2'>PREDEFINITI</p>
                            <div>
                                {types_default.map(type_default => (
                                    <Link onClick={() => setActiveDefault(type_default)}>
                                        <BlueBlock
                                            key={type_default}
                                            name={type_default}
                                        />
                                    </Link>
                                ))}
                            </div>
                            <p className='sub-title my-2'>CAMPI LIBERI</p>
                            <div>
                                {types_free.map(type_free => (
                                    <Link onClick={() => setActiveFree(type_free)}>
                                        <BlueBlock
                                            key={type_free}
                                            name={type_free}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={9} md={9}>
                        <div className='card-newchecklist'>

                            {
                                activeDefault != "" ?
                                    (
                                        <div className='field-content'>
                                            <div className='d-flex justify-content-space-between field-title'>
                                                <p>NOME CAMPO</p>
                                                <p>TIPO DI CAMPO</p>
                                                <div></div>
                                            </div>
                                            <div className='field-item d-flex my-1 align-items-center'>
                                                <div className='field-table d-flex justify-content-space-between align-items-center'>
                                                    <div className='item-1'>Titolo</div>
                                                    <div className='item-2'>Testo breve</div>
                                                    <IconButton>
                                                        <img src={iconDetail} />
                                                    </IconButton>
                                                </div>
                                                <div className='icon-trash'>
                                                    <IconButton>
                                                        <img src={iconTrash} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div className='field-item d-flex my-1 align-items-center'>
                                                <div className='field-table d-flex justify-content-space-between align-items-center'>
                                                    <div className='item-1'>
                                                        <input placeholder='Inserisci il nome del campo' value={numberVal} onChange={e => { setNumberVal(e.target.value); IsFilled(); }}></input>
                                                    </div>
                                                    <div className='item-2'>Numero</div>
                                                    <IconButton>
                                                        <img src={iconDetail} />
                                                    </IconButton>
                                                </div>
                                                <div className='icon-trash'>
                                                    <IconButton>
                                                        <img src={iconTrash} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div className='field-item d-flex my-1 align-items-center'>
                                                <div className='field-table d-flex justify-content-space-between align-items-center'>
                                                    <div className='item-many'>
                                                        <div className='item-top d-flex'>
                                                            <div className='item-children-1'>
                                                                Stato
                                                            </div>
                                                            <div className='item-children-2'>Scelta singola</div>
                                                        </div>
                                                        <div className='item-bottom d-flex mt-2'>
                                                            <div style={{ marginRight: "80px", }}>Opzioni:</div>

                                                            <div className='mx-1'>
                                                                <Button variant="text" className='icon-btn-warning icon-btn'>In corso</Button>
                                                            </div>
                                                            <div className='mx-1'>
                                                                <Button variant="text" className='icon-btn-primary icon-btn'>Aperto</Button>
                                                            </div>
                                                            <div className='mx-1'>
                                                                <Button variant="text" className='icon-btn-danger icon-btn'>In ritardo</Button>
                                                            </div>
                                                            <div className='mx-1'>
                                                                <Button variant="text" className='icon-btn-success icon-btn'>Risolto</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <IconButton>
                                                        <img src={iconDetail} />
                                                    </IconButton>
                                                </div>
                                                <div className='icon-trash'>
                                                    <IconButton>
                                                        <img src={iconTrash} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div className='field-item d-flex my-1 align-items-center'>
                                                <div className='field-table d-flex justify-content-space-between align-items-center'>
                                                    <div className='item-many'>
                                                        <div className='item-top d-flex'>
                                                            <div className='item-children-1'>
                                                                <input placeholder='Inserisci il nome del campo' value={choiceVal} onChange={e => { setChoiceVal(e.target.value); IsFilled(); }} />
                                                            </div>
                                                            <div className='item-children-2'>Scelta singola</div>
                                                        </div>
                                                        <div className='item-bottom d-flex mt-2'>
                                                            <div style={{ marginRight: "20px", }}>Opzioni:</div>

                                                            <input placeholder='Inserisci le opzioni separate da virgola' value={optionsVal} onChange={e => { setOptionsVal(e.target.value); IsFilled(); }}></input>
                                                        </div>
                                                    </div>
                                                    <IconButton>
                                                        <img src={iconDetail} />
                                                    </IconButton>
                                                </div>
                                                <div className='icon-trash'>
                                                    <IconButton>
                                                        <img src={iconTrash} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='d-flex justify-content-center  pt-150'>
                                                <img src={iconData} />
                                            </div>
                                            <div className='d-flex justify-content-center text-data pb-150'>
                                                <p style={{ width: "400px" }}>
                                                    Trascina i campi dalla colonna a sinistra
                                                    a questa tela per creare il tuo verbale</p>
                                            </div>
                                        </>)
                            }


                            <div className='card-newchecklist-footer d-flex'>
                                <div className='mx-1'>
                                    <CustomButton name="Annulla" bgColor="tertiary" />
                                </div>
                                <div className='mx-1'>
                                    <CustomButton name="Salva" bgColor="primary" active={(btnActive == "true") ? "true" : "false"} />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Newchecklist;