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
    certBasicModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certBasicModelImpl
    implements certBasicModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtbs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagecertbs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagecertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgopcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtmorebs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagemorebs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagemorebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtmorebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtmorebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtmorebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtmorebs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phcertbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errortextbs;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("labelcertbs")
    public String getLabelcertbs() {
        return labelcertbs;
    }

    @Override
    @JsonProperty("colorlabelcertbs")
    public String getColorlabelcertbs() {
        return colorlabelcertbs;
    }

    @Override
    @JsonProperty("colorbtbs")
    public String getColorbtbs() {
        return colorbtbs;
    }

    @Override
    @JsonProperty("leftimagecertbs")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagecertbs() {
        return leftimagecertbs;
    }

    @Override
    @JsonProperty("rightimagecertbs")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagecertbs() {
        return rightimagecertbs;
    }

    @Override
    @JsonProperty("txtcertbs")
    public String getTxtcertbs() {
        return txtcertbs;
    }

    @Override
    @JsonProperty("colortxtcertbs")
    public String getColortxtcertbs() {
        return colortxtcertbs;
    }

    @Override
    @JsonProperty("fstxtcertbs")
    public Long getFstxtcertbs() {
        return fstxtcertbs;
    }

    @Override
    @JsonProperty("brbtcertbs")
    public Long getBrbtcertbs() {
        return brbtcertbs;
    }

    @Override
    @JsonProperty("bgopcertbs")
    public String getBgopcertbs() {
        return bgopcertbs;
    }

    @Override
    @JsonProperty("colorbtmorebs")
    public String getColorbtmorebs() {
        return colorbtmorebs;
    }

    @Override
    @JsonProperty("leftimagemorebs")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagemorebs() {
        return leftimagemorebs;
    }

    @Override
    @JsonProperty("rightimagemorebs")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagemorebs() {
        return rightimagemorebs;
    }

    @Override
    @JsonProperty("txtmorebs")
    public String getTxtmorebs() {
        return txtmorebs;
    }

    @Override
    @JsonProperty("colortxtmorebs")
    public String getColortxtmorebs() {
        return colortxtmorebs;
    }

    @Override
    @JsonProperty("fstxtmorebs")
    public Long getFstxtmorebs() {
        return fstxtmorebs;
    }

    @Override
    @JsonProperty("brbtmorebs")
    public Long getBrbtmorebs() {
        return brbtmorebs;
    }

    @Override
    @JsonProperty("colorerrorcertbs")
    public String getColorerrorcertbs() {
        return colorerrorcertbs;
    }

    @Override
    @JsonProperty("phcertbs")
    public String getPhcertbs() {
        return phcertbs;
    }

    @Override
    @JsonProperty("errortextbs")
    public String getErrortextbs() {
        return errortextbs;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
