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
 * Defines the {@code buttonCertificateModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface buttonCertificateModel
    extends ComponentExporter
{


    @JsonProperty("txtbuttonct")
    String getTxtbuttonct();

    @JsonProperty("colorbuttonct")
    String getColorbuttonct();

    @JsonProperty("colortxtbuttonct")
    String getColortxtbuttonct();

    @JsonProperty("fsbuttonct")
    Long getFsbuttonct();

    @JsonProperty("brbuttonct")
    Long getBrbuttonct();

    @JsonProperty("leftimagect")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagect();

    @JsonProperty("rightimagect")
    com.adobe.cq.wcm.core.components.models.Image getRightimagect();

}
