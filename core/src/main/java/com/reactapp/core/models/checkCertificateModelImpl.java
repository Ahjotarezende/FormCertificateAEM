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
    checkCertificateModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class checkCertificateModelImpl
    implements checkCertificateModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textcheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorcheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorcheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortextcheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorcheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fscheckct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean checkct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean roundct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredcheckct;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textcheckct")
    public String getTextcheckct() {
        return textcheckct;
    }

    @Override
    @JsonProperty("errorcheckct")
    public String getErrorcheckct() {
        return errorcheckct;
    }

    @Override
    @JsonProperty("colorcheckct")
    public String getColorcheckct() {
        return colorcheckct;
    }

    @Override
    @JsonProperty("colortextcheckct")
    public String getColortextcheckct() {
        return colortextcheckct;
    }

    @Override
    @JsonProperty("colorerrorcheckct")
    public String getColorerrorcheckct() {
        return colorerrorcheckct;
    }

    @Override
    @JsonProperty("fscheckct")
    public Long getFscheckct() {
        return fscheckct;
    }

    @Override
    @JsonProperty("checkct")
    public Boolean getCheckct() {
        return checkct;
    }

    @Override
    @JsonProperty("roundct")
    public Boolean getRoundct() {
        return roundct;
    }

    @Override
    @JsonProperty("requiredcheckct")
    public Boolean getRequiredcheckct() {
        return requiredcheckct;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
