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
    certCertificateModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certCertificateModelImpl
    implements certCertificateModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtct;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagecertct;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagecertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgopcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtmorect;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagemorect;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagemorect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtmorect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtmorect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtmorect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtmorect;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phcertct;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errortextct;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("labelcertct")
    public String getLabelcertct() {
        return labelcertct;
    }

    @Override
    @JsonProperty("colorlabelcertct")
    public String getColorlabelcertct() {
        return colorlabelcertct;
    }

    @Override
    @JsonProperty("colorbtct")
    public String getColorbtct() {
        return colorbtct;
    }

    @Override
    @JsonProperty("leftimagecertct")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagecertct() {
        return leftimagecertct;
    }

    @Override
    @JsonProperty("rightimagecertct")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagecertct() {
        return rightimagecertct;
    }

    @Override
    @JsonProperty("txtcertct")
    public String getTxtcertct() {
        return txtcertct;
    }

    @Override
    @JsonProperty("colortxtcertct")
    public String getColortxtcertct() {
        return colortxtcertct;
    }

    @Override
    @JsonProperty("fstxtcertct")
    public Long getFstxtcertct() {
        return fstxtcertct;
    }

    @Override
    @JsonProperty("brbtcertct")
    public Long getBrbtcertct() {
        return brbtcertct;
    }

    @Override
    @JsonProperty("bgopcertct")
    public String getBgopcertct() {
        return bgopcertct;
    }

    @Override
    @JsonProperty("colorbtmorect")
    public String getColorbtmorect() {
        return colorbtmorect;
    }

    @Override
    @JsonProperty("leftimagemorect")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagemorect() {
        return leftimagemorect;
    }

    @Override
    @JsonProperty("rightimagemorect")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagemorect() {
        return rightimagemorect;
    }

    @Override
    @JsonProperty("txtmorect")
    public String getTxtmorect() {
        return txtmorect;
    }

    @Override
    @JsonProperty("colortxtmorect")
    public String getColortxtmorect() {
        return colortxtmorect;
    }

    @Override
    @JsonProperty("fstxtmorect")
    public Long getFstxtmorect() {
        return fstxtmorect;
    }

    @Override
    @JsonProperty("brbtmorect")
    public Long getBrbtmorect() {
        return brbtmorect;
    }

    @Override
    @JsonProperty("colorerrorcertct")
    public String getColorerrorcertct() {
        return colorerrorcertct;
    }

    @Override
    @JsonProperty("phcertct")
    public String getPhcertct() {
        return phcertct;
    }

    @Override
    @JsonProperty("errortextct")
    public String getErrortextct() {
        return errortextct;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
