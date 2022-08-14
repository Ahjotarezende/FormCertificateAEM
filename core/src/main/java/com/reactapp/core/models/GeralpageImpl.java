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

import java.util.Collections;
import java.util.List;
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
    Geralpage.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/geralpage")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class GeralpageImpl
    implements Geralpage
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fonts;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlecolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgpage;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgform;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorcomp;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<headerBasicModel> headerbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<navBasicModel> navbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<inputBasicModel> inputbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<birthBasicModel> birthbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<checkBasicModel> checkbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<buttonBasicModel> buttonbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certBasicModel> certbasic;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<headerSocialModel> headersocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<navSocialModel> navsocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<inputSocialModel> inputsocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<birthSocialModel> birthsocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<checkSocialModel> checksocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<buttonSocialModel> buttonsocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certSocialModel> certsocial;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<headerCertificateModel> headercertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<navCertificateModel> navcertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<inputCertificateModel> inputcertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<birthCertificateModel> birthcertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<checkCertificateModel> checkcertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<buttonCertificateModel> buttoncertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certCertificateModel> certcertificate;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<headerResultModel> headerresult;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorresult;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<buttonResultModel> buttonresult;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("fonts")
    public String getFonts() {
        return fonts;
    }

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("titlecolor")
    public String getTitlecolor() {
        return titlecolor;
    }

    @Override
    @JsonProperty("fstitle")
    public Long getFstitle() {
        return fstitle;
    }

    @Override
    @JsonProperty("bgpage")
    public String getBgpage() {
        return bgpage;
    }

    @Override
    @JsonProperty("bgform")
    public String getBgform() {
        return bgform;
    }

    @Override
    @JsonProperty("colorcomp")
    public String getColorcomp() {
        return colorcomp;
    }

    @Override
    public List<headerBasicModel> getHeaderbasic() {
        return headerbasic != null ? Collections.unmodifiableList(headerbasic) : null;
    }

    @Override
    public List<navBasicModel> getNavbasic() {
        return navbasic != null ? Collections.unmodifiableList(navbasic) : null;
    }

    @Override
    public List<inputBasicModel> getInputbasic() {
        return inputbasic != null ? Collections.unmodifiableList(inputbasic) : null;
    }

    @Override
    public List<birthBasicModel> getBirthbasic() {
        return birthbasic != null ? Collections.unmodifiableList(birthbasic) : null;
    }

    @Override
    public List<checkBasicModel> getCheckbasic() {
        return checkbasic != null ? Collections.unmodifiableList(checkbasic) : null;
    }

    @Override
    public List<buttonBasicModel> getButtonbasic() {
        return buttonbasic != null ? Collections.unmodifiableList(buttonbasic) : null;
    }

    @Override
    public List<certBasicModel> getCertbasic() {
        return certbasic != null ? Collections.unmodifiableList(certbasic) : null;
    }

    @Override
    public List<headerSocialModel> getHeadersocial() {
        return headersocial != null ? Collections.unmodifiableList(headersocial) : null;
    }

    @Override
    public List<navSocialModel> getNavsocial() {
        return navsocial != null ? Collections.unmodifiableList(navsocial) : null;
    }

    @Override
    public List<inputSocialModel> getInputsocial() {
        return inputsocial != null ? Collections.unmodifiableList(inputsocial) : null;
    }

    @Override
    public List<birthSocialModel> getBirthsocial() {
        return birthsocial != null ? Collections.unmodifiableList(birthsocial) : null;
    }

    @Override
    public List<checkSocialModel> getChecksocial() {
        return checksocial != null ? Collections.unmodifiableList(checksocial) : null;
    }

    @Override
    public List<buttonSocialModel> getButtonsocial() {
        return buttonsocial != null ? Collections.unmodifiableList(buttonsocial) : null;
    }

    @Override
    public List<certSocialModel> getCertsocial() {
        return certsocial != null ? Collections.unmodifiableList(certsocial) : null;
    }

    @Override
    public List<headerCertificateModel> getHeadercertificate() {
        return headercertificate != null ? Collections.unmodifiableList(headercertificate) : null;
    }

    @Override
    public List<navCertificateModel> getNavcertificate() {
        return navcertificate != null ? Collections.unmodifiableList(navcertificate) : null;
    }

    @Override
    public List<inputCertificateModel> getInputcertificate() {
        return inputcertificate != null ? Collections.unmodifiableList(inputcertificate) : null;
    }

    @Override
    public List<birthCertificateModel> getBirthcertificate() {
        return birthcertificate != null ? Collections.unmodifiableList(birthcertificate) : null;
    }

    @Override
    public List<checkCertificateModel> getCheckcertificate() {
        return checkcertificate != null ? Collections.unmodifiableList(checkcertificate) : null;
    }

    @Override
    public List<buttonCertificateModel> getButtoncertificate() {
        return buttoncertificate != null ? Collections.unmodifiableList(buttoncertificate) : null;
    }

    @Override
    public List<certCertificateModel> getCertcertificate() {
        return certcertificate != null ? Collections.unmodifiableList(certcertificate) : null;
    }

    @Override
    public List<headerResultModel> getHeaderresult() {
        return headerresult != null ? Collections.unmodifiableList(headerresult) : null;
    }

    @Override
    @JsonProperty("colorresult")
    public String getColorresult() {
        return colorresult;
    }

    @Override
    public List<buttonResultModel> getButtonresult() {
        return buttonresult != null ? Collections.unmodifiableList(buttonresult) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
