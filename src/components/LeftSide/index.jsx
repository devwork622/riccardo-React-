import React from "react";
import "./style.scss";
import logoImg from "../../assets/images/logo-bianco 1.png";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { fontSize } from "@mui/system";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Link } from "react-router-dom";



const LeftSide = () => {
    return (
        <div className="left-side-section">
            <div className="logo-section">
                <Link to="/">
                    <img src={logoImg} />
                </Link>
            </div>
            <div className="tree-section">
                <TreeView
                    aria-label="multi-select"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    sx={{ height: 216, flexGrow: 1, color: "#fff" }}
                    className="treeview"
                >
                    <TreeItem nodeId="1" label="Dashboard" />
                    <TreeItem nodeId="2" label="Unità Immobiliari e Condomini">
                        <TreeItem nodeId="21" label="xxxxxx" />
                    </TreeItem>
                    <TreeItem nodeId="22" label="Affiti" />
                    <TreeItem nodeId="3" label="Stato Lavori in Corso">
                        <TreeItem nodeId="5" label="Bacheca" />
                        <TreeItem nodeId="6" label="Gestioni" />
                        <TreeItem nodeId="7" label="Unità e Stabili" />
                        <TreeItem nodeId="8" label="Attivitò" />
                        <TreeItem nodeId="9" label="Chat" />
                        <TreeItem nodeId="10" label="File esportati" />
                        <TreeItem nodeId="11" label="Archivio" />
                        <TreeItem nodeId="12" label="Impostazioni chat" />
                    </TreeItem>
                    <TreeItem nodeId="13" label="Membri">
                        <TreeItem nodeId="22" label="xxxxxx" />
                    </TreeItem>
                    <TreeItem nodeId="14" label="Documenti">
                        <TreeItem nodeId="22" label="xxxxxx" />
                    </TreeItem>
                    <TreeItem nodeId="15" label="Calcoli Immobiliari">
                        <TreeItem nodeId="22" label="xxxxxx" />
                    </TreeItem>
                    <TreeItem nodeId="16" label="Alert" />
                    <TreeItem nodeId="17" label="Supporto" />
                    <TreeItem nodeId="18" label="Impostazioni " />
                    <TreeItem nodeId="19" label="Logout" />

                </TreeView>
            </div>
        </div>
    )
}

export default LeftSide;