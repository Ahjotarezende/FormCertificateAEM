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
    inputBasicModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class inputBasicModelImpl
    implements inputBasicModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textlabelbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textplacebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String texterrorbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsinputbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredinputbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String typeinputbs;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textonebs")
    public String getTextlabelbs() {
        return textlabelbs;
    }

    @Override
    @JsonProperty("texttwobs")
    public String getTextplacebs() {
        return textplacebs;
    }

    @Override
    @JsonProperty("textthreebs")
    public String getTexterrorbs() {
        return texterrorbs;
    }

    @Override
    @JsonProperty("colortextnavbs")
    public String getColorlabelbs() {
        return colorlabelbs;
    }

    @Override
    @JsonProperty("colorselectedbs")
    public String getColorerrorbs() {
        return colorerrorbs;
    }

    @Override
    @JsonProperty("colorcompbs")
    public Long getFsinputbs() {
        return fsinputbs;
    }

    @Override
    @JsonProperty("requiredinputbs")
    public Boolean getRequiredinputbs() {
        return requiredinputbs;
    }

    @Override
    @JsonProperty("typeinputbs")
    public String getTypeinputbs() {
        return typeinputbs;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
