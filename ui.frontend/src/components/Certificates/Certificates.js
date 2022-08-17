import { React, useState } from "react";
import Label from "../Micros/Label/Label"
import Button from "../Button/Button"
import { InputCert, DivMore, Empty, DivCertificate, DivButtons, DivCert, DivOptions } from './Certificates.styled'

const Certificates = ({labelcert, colorlabelcert, colorbt, 
    leftimagecert, rightimagecert, txtcert, colortxtcert, 
    fstxtcert, brbtcert, bgopcert, colorbtmore, leftimagemore, 
    rightimagemore, txtmore, colortxtmore, fstxtmore, brbtmore,
    colorerrorcert, phcert, errortext, colorcomp}) => {

    const [viewOp, setViewOp] = useState("not");
    const [viewEmpty, setViewEmpty] = useState("notView");
    const [viewFull, setViewFull] = useState("notView");
    const [certificado, setCertificado] = useState("");
    const [arrayCertificado, setArrayCertificado] = useState([]);
    const [bigButton, setBigButton] = useState("");

    const viewOptions = () => {
        if(bigButton==="big"){
            setBigButton("")
            setViewOp("not")
        }
        else{
            setBigButton("big")
            setViewOp("")
        }
    }

    const adding = () => {
        if(arrayCertificado.length<5 && certificado!==""){
            setArrayCertificado([...arrayCertificado, certificado]);
            setViewEmpty("notView")
            setViewFull("notView")
        }
        if(certificado===""){
            setViewEmpty("")
            setViewFull("notView")
        }
        if(arrayCertificado.length>=5)
            setViewFull("")
    }

    const deletOp = (entry) => {
        const newList = arrayCertificado.filter(rdm => rdm != entry)
        setArrayCertificado(newList)
    }

    return (
        <DivCertificate>
            <Label text={labelcert} fontSize={`${fstxtcert}px`} color={colorlabelcert}/>

            <InputCert type="text" placeholder={phcert} color={colorcomp} onChange={(e) => setCertificado(e.target.value)}/>

            <DivButtons>

                <DivCert>

                    <Button className={bigButton} bgbutton={colorbt} colorbutton={colortxtcert} brbutton={brbtcert} 
                    fsbutton={fstxtcert} leftImage={leftimagecert} rightImage={rightimagecert} txtbutton={txtcert} onClick={viewOptions}/>
                    
                    {arrayCertificado.map((rdm, i) =>
                        <DivOptions className={viewOp} key={i} bgopcert={`${bgopcert}80`}>
                            <p>{rdm}</p>
                            <button onClick={() => deletOp(rdm)}>X</button>
                        </DivOptions>
                    )}

                </DivCert>

                <DivMore>
                    <Button bgbutton={colorbtmore} colorbutton={colortxtmore} brbutton={brbtmore} 
                    fsbutton={fstxtmore} leftImage={leftimagemore} rightImage={rightimagemore} txtbutton={txtmore} onClick={adding}/>
                    <Empty className={viewEmpty} color={colorerrorcert}>{errortext}</Empty>
                    <Empty className={viewFull} color={colorerrorcert}>Sorry, only 5 certificates are allowed.</Empty>
                    <Empty className={viewFull} color={colorerrorcert}>You can remove one certificate instead.</Empty>
                </DivMore>
                
            </DivButtons>

        </DivCertificate>
    )
}

export default Certificates