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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
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
    buttonCertificateModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class buttonCertificateModelImpl
    implements buttonCertificateModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtbuttonct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbuttonct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtbuttonct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsbuttonct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbuttonct;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagect;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagect;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("txtbuttonct")
    public String getTxtbuttonct() {
        return txtbuttonct;
    }

    @Override
    @JsonProperty("colorbuttonct")
    public String getColorbuttonct() {
        return colorbuttonct;
    }

    @Override
    @JsonProperty("colortxtbuttonct")
    public String getColortxtbuttonct() {
        return colortxtbuttonct;
    }

    @Override
    @JsonProperty("fsbuttonct")
    public Long getFsbuttonct() {
        return fsbuttonct;
    }

    @Override
    @JsonProperty("brbuttonct")
    public Long getBrbuttonct() {
        return brbuttonct;
    }

    @Override
    @JsonProperty("leftimagect")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagect() {
        return leftimagect;
    }

    @Override
    @JsonProperty("rightimagect")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagect() {
        return rightimagect;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
