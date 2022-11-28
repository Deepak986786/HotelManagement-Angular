'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hotel-management-client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' : 'data-target="#xs-components-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' :
                                            'id="xs-components-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' : 'data-target="#xs-injectables-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' :
                                        'id="xs-injectables-links-module-AppModule-887a3aa9b2634fea8dfa8d6628677aa54c1472f122766a3b89149a8676ddb5e243dae0f01bc55c2bb7eb2222678babf14abca8c97cab8e9e6759f542433e3d8c"' }>
                                        <li class="link">
                                            <a href="injectables/HttpCacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HttpCacheService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InterceptorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterceptorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookingModule.html" data-type="entity-link" >BookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BookingModule-849b2c6eab13aac2a09d22cc27b8752c469f2ce5cf917453aea06ca4e0766bbeb36e5f288575f7e89140850d3dd4015866cc6dc597739aa7393df122e1f5f204"' : 'data-target="#xs-components-links-module-BookingModule-849b2c6eab13aac2a09d22cc27b8752c469f2ce5cf917453aea06ca4e0766bbeb36e5f288575f7e89140850d3dd4015866cc6dc597739aa7393df122e1f5f204"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BookingModule-849b2c6eab13aac2a09d22cc27b8752c469f2ce5cf917453aea06ca4e0766bbeb36e5f288575f7e89140850d3dd4015866cc6dc597739aa7393df122e1f5f204"' :
                                            'id="xs-components-links-module-BookingModule-849b2c6eab13aac2a09d22cc27b8752c469f2ce5cf917453aea06ca4e0766bbeb36e5f288575f7e89140850d3dd4015866cc6dc597739aa7393df122e1f5f204"' }>
                                            <li class="link">
                                                <a href="components/GalleryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GalleryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomBookingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomBookingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-f9de4d7dae48b53a209db8148d0ba9a0814b29810542956e386844901e1dfa0cca27c21757e24c2d0e11e3f32e668a9a310cf488a06dcdab3f3f89b6bd1e48f9"' : 'data-target="#xs-components-links-module-CoreModule-f9de4d7dae48b53a209db8148d0ba9a0814b29810542956e386844901e1dfa0cca27c21757e24c2d0e11e3f32e668a9a310cf488a06dcdab3f3f89b6bd1e48f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-f9de4d7dae48b53a209db8148d0ba9a0814b29810542956e386844901e1dfa0cca27c21757e24c2d0e11e3f32e668a9a310cf488a06dcdab3f3f89b6bd1e48f9"' :
                                            'id="xs-components-links-module-CoreModule-f9de4d7dae48b53a209db8148d0ba9a0814b29810542956e386844901e1dfa0cca27c21757e24c2d0e11e3f32e668a9a310cf488a06dcdab3f3f89b6bd1e48f9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' : 'data-target="#xs-components-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' :
                                            'id="xs-components-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' }>
                                            <li class="link">
                                                <a href="components/PopUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' : 'data-target="#xs-pipes-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' :
                                            'id="xs-pipes-links-module-SharedModule-a12dfdc8836742358a7b47bc537b426096225f750ebb76d3030bdb41c036ed1cbea963ff6bdbd7d0653ca11a624556ac2823c68f3b8714654903abc55809aece"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-34e59ba4b25cca3e18d2cfc832cee73b1b2e8ca31485f32428e3721698d4ed93959171c26df58608bc20ff0f70557cbc4e8553ac88623e04fd2ffeed9b6d700f"' : 'data-target="#xs-components-links-module-UsersModule-34e59ba4b25cca3e18d2cfc832cee73b1b2e8ca31485f32428e3721698d4ed93959171c26df58608bc20ff0f70557cbc4e8553ac88623e04fd2ffeed9b6d700f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-34e59ba4b25cca3e18d2cfc832cee73b1b2e8ca31485f32428e3721698d4ed93959171c26df58608bc20ff0f70557cbc4e8553ac88623e04fd2ffeed9b6d700f"' :
                                            'id="xs-components-links-module-UsersModule-34e59ba4b25cca3e18d2cfc832cee73b1b2e8ca31485f32428e3721698d4ed93959171c26df58608bc20ff0f70557cbc4e8553ac88623e04fd2ffeed9b6d700f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembershipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MembershipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/CompareDirective.html" data-type="entity-link" >CompareDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/UniqueEmailDirective.html" data-type="entity-link" >UniqueEmailDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpBookingService.html" data-type="entity-link" >HttpBookingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCacheService.html" data-type="entity-link" >HttpCacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpUserService.html" data-type="entity-link" >HttpUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterceptorService.html" data-type="entity-link" >InterceptorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/CacheInterceptor.html" data-type="entity-link" >CacheInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Booking.html" data-type="entity-link" >Booking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookingDetails.html" data-type="entity-link" >BookingDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookingService.html" data-type="entity-link" >BookingService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoggedInDetails.html" data-type="entity-link" >LoggedInDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginInfo.html" data-type="entity-link" >LoginInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserService.html" data-type="entity-link" >UserService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});