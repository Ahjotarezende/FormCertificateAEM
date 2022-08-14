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
    headerCertificateModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class headerCertificateModelImpl
    implements headerCertificateModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String smalltextct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bigtextct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbigtextct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorsmalltextct;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("smalltextct")
    public String getSmalltextct() {
        return smalltextct;
    }

    @Override
    @JsonProperty("bigtextct")
    public String getBigtextct() {
        return bigtextct;
    }

    @Override
    @JsonProperty("colorbigtextct")
    public String getColorbigtextct() {
        return colorbigtextct;
    }

    @Override
    @JsonProperty("colorsmalltextct")
    public String getColorsmalltextct() {
        return colorsmalltextct;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
