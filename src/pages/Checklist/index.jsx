import * as React from 'react';
import "./style.scss";
import ShadowInput from '../../components/ShadowInput';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import bigTagImg from "../../assets/images/icon-tag 1.png";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputText from '../../components/InputText';
import CustomButton from '../../components/CustomButton';
import TextBtn from '../../components/TextBtn';
import { useDispatch, useSelector } from "react-redux";
import { GetTagName } from '../../redux/Tags/actions';
import iconSearch1 from "../../assets/images/icon-search 1.png"
import IconButton from '@mui/material/IconButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 736,
    height: 463,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const Checklist = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const storeValue = useSelector((store) => store);
    const tagName = storeValue.TagReducer.tag_name;
    const [tmpVal, setTmpVal] = React.useState("");

    const onChangeInput = (_val) => {
        setTmpVal(_val);
    }

    const onClickBtn = () => {
        dispatch(GetTagName(tmpVal));
    }

    return (
        <div className='tag-section'>
            <p className='text-breadcrumb'>Checklist e verbali</p>
            <div className='tag-section-items'>
                <ShadowInput />
                <Button onClick={handleOpen}>
                    <AddCircleIcon sx={{ fontSize: "70px", color: "#83112F" }} />
                </Button>
                <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <header className="modal-header">
                            <span onClick={handleClose}>&times;</span>
                        </header>
                        <div className='modal-title'>
                            <p>Aggiungi Tag</p>
                        </div>
                        <div className='modal-content'>
                            <div className='form-group'>
                                <label>Nome tag</label>
                                <InputText placeholder="tagrandom1" onChangeInput={onChangeInput} />
                            </div>
                            <div className='slava-btn-section'>
                                <div className='d-flex justify-content-center'>
                                    <CustomButton name="Slava" bgColor="primary" onClickBtn={onClickBtn} />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                    <TextBtn name="Annulla" textColor="default" />
                                </div>
                            </div>
                        </div>

                    </Box>
                </Modal>
            </div>
            {tagName ? (

                <div>
                    <p>{tagName}</p>
                </div>
            ) : (
                <div className='checklist-card-section d-flex align-items-center justify-content-space-between'>
                    <p>Verbale Intervento</p>
                    <IconButton aria-label="search1">
                        <img src={iconSearch1} />
                    </IconButton>
                </div>
            )}
        </div>
    );
}

export default Checklist;