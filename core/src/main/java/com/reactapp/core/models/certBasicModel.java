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
 * Defines the {@code certBasicModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface certBasicModel
    extends ComponentExporter
{


    @JsonProperty("colorbtbs")
    String getColorbtbs();

    @JsonProperty("leftimagecertbs")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagecertbs();

    @JsonProperty("rightimagecertbs")
    com.adobe.cq.wcm.core.components.models.Image getRightimagecertbs();

    @JsonProperty("txtcertbs")
    String getTxtcertbs();

    @JsonProperty("colortxtcertbs")
    String getColortxtcertbs();

    @JsonProperty("fstxtcertbs")
    Long getFstxtcertbs();

    @JsonProperty("brbtcertbs")
    Long getBrbtcertbs();

    @JsonProperty("bgopcertbs")
    String getBgopcertbs();

    @JsonProperty("colorbtmorebs")
    String getColorbtmorebs();

    @JsonProperty("leftimagemorebs")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagemorebs();

    @JsonProperty("rightimagemorebs")
    com.adobe.cq.wcm.core.components.models.Image getRightimagemorebs();

    @JsonProperty("txtmorebs")
    String getTxtmorebs();

    @JsonProperty("colortxtmorebs")
    String getColortxtmorebs();

    @JsonProperty("fstxtmorebs")
    Long getFstxtmorebs();

    @JsonProperty("brbtmorebs")
    Long getBrbtmorebs();

    @JsonProperty("colorerrorcertbs")
    String getColorerrorcertbs();

    @JsonProperty("phcertbs")
    String getPhcertbs();

    @JsonProperty("errortextbs")
    String getErrortextbs();

}
