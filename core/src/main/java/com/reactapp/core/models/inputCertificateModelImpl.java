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
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    inputCertificateModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class inputCertificateModelImpl
    implements inputCertificateModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textlabelct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textplacect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String texterrorct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsinputct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredinputct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String typeinputct;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textonect")
    public String getTextlabelct() {
        return textlabelct;
    }

    @Override
    @JsonProperty("texttwoct")
    public String getTextplacect() {
        return textplacect;
    }

    @Override
    @JsonProperty("textthreect")
    public String getTexterrorct() {
        return texterrorct;
    }

    @Override
    @JsonProperty("colortextnavct")
    public String getColorlabelct() {
        return colorlabelct;
    }

    @Override
    @JsonProperty("colorselectedct")
    public String getColorerrorct() {
        return colorerrorct;
    }

    @Override
    @JsonProperty("colorcompct")
    public Long getFsinputct() {
        return fsinputct;
    }

    @Override
    @JsonProperty("requiredinputct")
    public Boolean getRequiredinputct() {
        return requiredinputct;
    }

    @Override
    @JsonProperty("typeinputct")
    public String getTypeinputct() {
        return typeinputct;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
