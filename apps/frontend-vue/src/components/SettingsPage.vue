<template>
  <div class="settings-page cf" style="padding: 1.5rem">
    <div class="settings-page__header">
      <div class="settings-page__titles settings-page__titles--left">
        <h1 class="settings-page__title">Store onwer Settings page</h1>
        <div class="settings-page__subtitle">
          You can see how many people interacted with recently updated products, how many recently
          updated products are visible by default for customers, export the products to CSV/XSLX, or
          enable/disable the widget. P.S: this page is built for store owner, however right now it
          does not have any auth or guard.
        </div>
      </div>

      <div class="alert alert-success alert-icon">
        <div class="alert-inner">
          <div class="alert-content">
            <div class="icon">
              <span class="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                  <path
                    d="M34.5 67h-.13c-8.68-.03-16.83-3.45-22.94-9.61C5.32 51.23 1.97 43.06 2 34.38 2.07 16.52 16.65 2 34.5 2h.13c8.68.03 16.83 3.45 22.94 9.61 6.12 6.16 9.46 14.34 9.43 23.02C66.93 52.48 52.35 67 34.5 67zm0-62C18.3 5 5.06 18.18 5 34.39c-.03 7.88 3.01 15.3 8.56 20.89 5.55 5.59 12.95 8.69 20.83 8.72h.12c16.2 0 29.44-13.18 29.5-29.39.03-7.88-3.01-15.3-8.56-20.89C49.89 8.13 42.49 5.03 34.61 5h-.11z"
                  ></path>
                  <path
                    d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="title">This is an example alert you can show in your app.</div>
            <div>
              Use the alert messages to catch users’ attention. If you want to let your users know
              about a problem or successful operation in your app, use the alerts.
              <a onclick="postOpenPage('#components.alerts')">See Alerts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-page__body" style="padding-bottom: 0.1px">
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Settings list</div>
            <div class="named-area__subtitle">
              The list of custom or predefined settings showing their status. If you make this
              section customizable, you need to hide it. Always place the Call to action list next
              to the Settings list.
              <a onclick="postOpenPage('#components.status-card')">See Status component</a>
            </div>
          </div>
        </div>
        <div class="named-area__body">
          <!-- StatusCard component -->
          <div class="a-card a-card--vertical-compact">
            <div class="a-card__paddings">
              <div class="iconable-block iconable-block--hide-in-mobile">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M36.76 30.51c-2.26 0-4.11 1.88-4.11 4.19s1.84 4.19 4.11 4.19 4.11-1.88 4.11-4.19-1.84-4.19-4.11-4.19zm0 6.38c-1.16 0-2.11-.98-2.11-2.19s.95-2.19 2.11-2.19 2.11.98 2.11 2.19-.95 2.19-2.11 2.19z"
                      ></path>
                      <path
                        d="M48.45 50c.94-1.08 1.55-2.47 1.55-3.91v-4.86c1.18-.98 2-2.68 2-3.91v-5.86c0-1.3-.84-2.86-2-3.75v-4.25c0-2.5-1.89-5.47-4.32-6.26l-1.2-3.39c-.65-2.17-2.65-3.68-4.88-3.68-.22 0-.44.02-.66.05L36.91 7.1c-.7-1.07-1.78-1.79-3.02-2.03-1.25-.22-2.49.04-3.49.73L12.71 17h-1.7C8.14 17 6 20.41 6 23.47V46.1c0 1.38.47 2.8 1.3 3.91H1v2h54v-2h-6.55zM50 37.33c0 1-1.18 2.67-1.88 2.67H35.71c-2.47 0-4.58-3.02-4.58-5.5s2.12-5.5 4.58-5.5h12.41c.74 0 1.88 1.5 1.88 2.47v5.86zm-7.42-22.89l.9 2.56H23.66l14.98-4.71.1-.03c1.59-.47 3.34.51 3.84 2.18zM31.51 7.47c.59-.41 1.29-.56 1.99-.42.71.14 1.33.55 1.73 1.16l1.68 2.54L16.99 17h-.54l15.06-9.53zM11.01 50C9.24 50 8 47.94 8 46.09V23.47C8 21.46 9.39 19 11.01 19h33.43c1.76 0 3.55 2.6 3.55 4.47V27H35.71c-3.71 0-6.58 4.03-6.58 7.5S32 42 35.71 42H48v4.09c0 1.93-1.79 3.91-3.55 3.91H11.01z"
                      ></path>
                      <path
                        d="M18.2 33.41c-1.48 0-2.59-.78-2.59-1.48s1.11-1.48 2.59-1.48 2.59.78 2.59 1.48c0 .61.5 1.11 1.11 1.11s1.1-.5 1.1-1.11c0-1.77-1.56-3.22-3.7-3.59v-1.2c0-.61-.5-1.11-1.11-1.11-.61 0-1.11.5-1.11 1.11v1.2c-2.14.37-3.7 1.82-3.7 3.59 0 2.07 2.11 3.69 4.8 3.69.28 0 2.59.78 2.59 1.48s-1.11 1.48-2.59 1.48c-1.48 0-2.59-.78-2.59-1.48 0-.61-.5-1.11-1.11-1.11s-1.11.5-1.11 1.11c0 1.77 1.56 3.22 3.7 3.59v1.2c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-1.2c2.14-.37 3.7-1.82 3.7-3.59.01-2.07-2.1-3.69-4.79-3.69z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="status-block">
                    <div class="status-block__central">
                      <div class="status-block__header">
                        <span class="status-block__title">RUP widget</span>
                        <span class="status-block__edit">Edit</span>
                      </div>
                      <div class="status-block__content">
                        <p>Enable/Disable recently updated products widget visibility</p>
                      </div>
                    </div>
                    <div class="status-block__actions-dropdown">
                      <div class="btn-group dropdown-toggle">
                        <button
                          type="button"
                          class="btn btn-default btn-medium"
                          aria-hidden="true"
                          style="display: none"
                        ></button>
                      </div>
                    </div>
                    <div class="status-block__primary-action">
                      <label class="checkbox big">
                        <input name="" type="checkbox" checked="" />
                        <div>
                          <div></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of StatusCard component -->

          <!-- StatusCard component -->
          <div class="a-card a-card--vertical-compact">
            <div class="a-card__paddings">
              <div class="iconable-block iconable-block--hide-in-mobile">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M36.76 30.51c-2.26 0-4.11 1.88-4.11 4.19s1.84 4.19 4.11 4.19 4.11-1.88 4.11-4.19-1.84-4.19-4.11-4.19zm0 6.38c-1.16 0-2.11-.98-2.11-2.19s.95-2.19 2.11-2.19 2.11.98 2.11 2.19-.95 2.19-2.11 2.19z"
                      ></path>
                      <path
                        d="M48.45 50c.94-1.08 1.55-2.47 1.55-3.91v-4.86c1.18-.98 2-2.68 2-3.91v-5.86c0-1.3-.84-2.86-2-3.75v-4.25c0-2.5-1.89-5.47-4.32-6.26l-1.2-3.39c-.65-2.17-2.65-3.68-4.88-3.68-.22 0-.44.02-.66.05L36.91 7.1c-.7-1.07-1.78-1.79-3.02-2.03-1.25-.22-2.49.04-3.49.73L12.71 17h-1.7C8.14 17 6 20.41 6 23.47V46.1c0 1.38.47 2.8 1.3 3.91H1v2h54v-2h-6.55zM50 37.33c0 1-1.18 2.67-1.88 2.67H35.71c-2.47 0-4.58-3.02-4.58-5.5s2.12-5.5 4.58-5.5h12.41c.74 0 1.88 1.5 1.88 2.47v5.86zm-7.42-22.89l.9 2.56H23.66l14.98-4.71.1-.03c1.59-.47 3.34.51 3.84 2.18zM31.51 7.47c.59-.41 1.29-.56 1.99-.42.71.14 1.33.55 1.73 1.16l1.68 2.54L16.99 17h-.54l15.06-9.53zM11.01 50C9.24 50 8 47.94 8 46.09V23.47C8 21.46 9.39 19 11.01 19h33.43c1.76 0 3.55 2.6 3.55 4.47V27H35.71c-3.71 0-6.58 4.03-6.58 7.5S32 42 35.71 42H48v4.09c0 1.93-1.79 3.91-3.55 3.91H11.01z"
                      ></path>
                      <path
                        d="M18.2 33.41c-1.48 0-2.59-.78-2.59-1.48s1.11-1.48 2.59-1.48 2.59.78 2.59 1.48c0 .61.5 1.11 1.11 1.11s1.1-.5 1.1-1.11c0-1.77-1.56-3.22-3.7-3.59v-1.2c0-.61-.5-1.11-1.11-1.11-.61 0-1.11.5-1.11 1.11v1.2c-2.14.37-3.7 1.82-3.7 3.59 0 2.07 2.11 3.69 4.8 3.69.28 0 2.59.78 2.59 1.48s-1.11 1.48-2.59 1.48c-1.48 0-2.59-.78-2.59-1.48 0-.61-.5-1.11-1.11-1.11s-1.11.5-1.11 1.11c0 1.77 1.56 3.22 3.7 3.59v1.2c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-1.2c2.14-.37 3.7-1.82 3.7-3.59.01-2.07-2.1-3.69-4.79-3.69z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="status-block">
                    <div class="status-block__central">
                      <div class="status-block__header">
                        <span class="status-block__title"
                          >Products visibility on RUP widget by default</span
                        >
                        <span class="status-block__edit">Edit</span>
                      </div>
                      <div class="status-block__content">
                        <p>Set how many Products are visible on RUP widget by default</p>
                      </div>
                    </div>
                    <div class="status-block__actions-dropdown">
                      <div class="btn-group dropdown-toggle">
                        <button
                          type="button"
                          class="btn btn-default btn-medium"
                          aria-hidden="true"
                          style="display: none"
                        ></button>
                        <div
                          class="btn btn-default btn-dropdown btn-medium list-dropdown-no-general-text"
                        >
                          <span class="btn-dropdown-container"
                            ><span class="actions">Select</span></span
                          ><span class="icon-arr-down"></span>
                        </div>
                        <div class="list-dropdown list-dropdown-medium">
                          <ul>
                            <li><a>Rename</a></li>
                            <li><a>Sort</a></li>
                            <li><a>Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of StatusCard component -->
        </div>
      </div>
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Call to action list</div>
            <div class="named-area__subtitle">
              Use the options on the Call to action list to add them the Settings list. When you
              click an option from this list, it appears on the list above. Otherwise, you can use
              this list to add options for other actions, for example, moving to some other page.
              <a onclick="postOpenPage('#components.cta-card')">See Call to Action component</a>
            </div>
          </div>
          <div class="named-area__description"></div>
          <div class="named-area__additional"></div>
        </div>
        <div class="named-area__body">
          <div class="a-card a-card--compact a-card--has-hover">
            <div class="a-card__paddings">
              <div class="iconable-block">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M14 22c0-.55-.45-1-1.01-1H4c-.56 0-1 .45-1 1s.45 1 1 1h8.99c.56 0 1.01-.45 1.01-1zM14 17c0-.55-.45-1-1.01-1H1c-.56 0-1 .45-1 1s.45 1 1 1h11.99c.56 0 1.01-.45 1.01-1z"
                      ></path>
                      <path
                        d="M55.99 28.94v-.01c-.02-.53-.25-1.01-.6-1.36l-6.03-10.81c-.53-.97-1.87-1.76-2.98-1.76H37v-4.99C37 8.9 36.1 8 35 8H7c-1.11 0-2 .9-2 2.01V14h2v-4s28 0 28 .01V41H21.9c-.48-2.84-2.93-5-5.9-5s-5.42 2.16-5.9 4.99H7.01V25H5v15.99C5 42.1 5.9 43 7 43h3.09c.48 2.84 2.93 5 5.9 5s5.43-2.16 5.9-5h18.2c.48 2.84 2.94 5 5.91 5s5.43-2.16 5.91-5H54c1.1 0 2-.89 2-1.99V28.99c0-.02 0-.03-.01-.05zM15.99 46c-2.2 0-3.99-1.79-3.99-4s1.79-4 3.99-4 3.99 1.79 3.99 4-1.78 4-3.99 4zM37 17h9.38c.38 0 1.05.39 1.23.72L52.78 27H37V17zm9 29c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm8-5h-2.09c-.48-2.84-2.94-5-5.91-5s-5.43 2.16-5.91 5H37V29h17v12z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="cta-block">
                    <div class="cta-block__central">
                      <div class="cta-block__title">Shipping & Delivery</div>
                      <div class="cta-block__content">
                        Set up simple flat rate shipping or use a provider like UPS, USPS, FedEx,
                        Canada Post, Australia Post or EMS Russian Post.
                      </div>
                    </div>
                    <div class="cta-block__cta">
                      <button type="button" class="btn btn-primary btn-medium">
                        <span>Add Shipping Method</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTACard component -->
          <div class="a-card a-card--compact a-card--has-hover">
            <div class="a-card__paddings">
              <div class="iconable-block">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M14 22c0-.55-.45-1-1.01-1H4c-.56 0-1 .45-1 1s.45 1 1 1h8.99c.56 0 1.01-.45 1.01-1zM14 17c0-.55-.45-1-1.01-1H1c-.56 0-1 .45-1 1s.45 1 1 1h11.99c.56 0 1.01-.45 1.01-1z"
                      ></path>
                      <path
                        d="M55.99 28.94v-.01c-.02-.53-.25-1.01-.6-1.36l-6.03-10.81c-.53-.97-1.87-1.76-2.98-1.76H37v-4.99C37 8.9 36.1 8 35 8H7c-1.11 0-2 .9-2 2.01V14h2v-4s28 0 28 .01V41H21.9c-.48-2.84-2.93-5-5.9-5s-5.42 2.16-5.9 4.99H7.01V25H5v15.99C5 42.1 5.9 43 7 43h3.09c.48 2.84 2.93 5 5.9 5s5.43-2.16 5.9-5h18.2c.48 2.84 2.94 5 5.91 5s5.43-2.16 5.91-5H54c1.1 0 2-.89 2-1.99V28.99c0-.02 0-.03-.01-.05zM15.99 46c-2.2 0-3.99-1.79-3.99-4s1.79-4 3.99-4 3.99 1.79 3.99 4-1.78 4-3.99 4zM37 17h9.38c.38 0 1.05.39 1.23.72L52.78 27H37V17zm9 29c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm8-5h-2.09c-.48-2.84-2.94-5-5.91-5s-5.43 2.16-5.91 5H37V29h17v12z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="cta-block">
                    <div class="cta-block__central">
                      <div class="cta-block__title">Some other action</div>
                      <div class="cta-block__content">Description of Some other action</div>
                    </div>
                    <div class="cta-block__cta">
                      <button type="button" class="btn btn-primary btn-medium">
                        <span>Action</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of CTACard component -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
