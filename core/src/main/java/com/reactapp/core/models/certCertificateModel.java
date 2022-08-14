/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code certCertificateModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface certCertificateModel
    extends ComponentExporter
{


    @JsonProperty("labelcertct")
    String getLabelcertct();

    @JsonProperty("colorlabelcertct")
    String getColorlabelcertct();

    @JsonProperty("colorbtct")
    String getColorbtct();

    @JsonProperty("leftimagecertct")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagecertct();

    @JsonProperty("rightimagecertct")
    com.adobe.cq.wcm.core.components.models.Image getRightimagecertct();

    @JsonProperty("txtcertct")
    String getTxtcertct();

    @JsonProperty("colortxtcertct")
    String getColortxtcertct();

    @JsonProperty("fstxtcertct")
    Long getFstxtcertct();

    @JsonProperty("brbtcertct")
    Long getBrbtcertct();

    @JsonProperty("bgopcertct")
    String getBgopcertct();

    @JsonProperty("colorbtmorect")
    String getColorbtmorect();

    @JsonProperty("leftimagemorect")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagemorect();

    @JsonProperty("rightimagemorect")
    com.adobe.cq.wcm.core.components.models.Image getRightimagemorect();

    @JsonProperty("txtmorect")
    String getTxtmorect();

    @JsonProperty("colortxtmorect")
    String getColortxtmorect();

    @JsonProperty("fstxtmorect")
    Long getFstxtmorect();

    @JsonProperty("brbtmorect")
    Long getBrbtmorect();

    @JsonProperty("colorerrorcertct")
    String getColorerrorcertct();

    @JsonProperty("phcertct")
    String getPhcertct();

    @JsonProperty("errortextct")
    String getErrortextct();

}
