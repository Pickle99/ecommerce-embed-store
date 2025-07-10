<template>
  <div class="toolbar">
    <button type="button" class="btn btn-default btn-medium">Export As a CSV</button>
    <button type="button" class="btn btn-default btn-medium">Export As a XLSX</button>
  </div>
  <div class="vertical-filters__sticky-panel">
    <button type="button" class="btn btn-success btn-medium">Show Products</button>
  </div>
  <div class="ecwid-orders__filter-panel vertical-filters">
    <div class="vertical-filters__names-list">
      <div>
        <div class="vertical-filters__filter-list-item visited">
          <div class="vertical-filters__filter-name">All products</div>
          <div class="vertical-filters__filter-count">126</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Displayed on storefront</div>
          <div class="vertical-filters__filter-count">27</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Out of stock</div>
          <div class="vertical-filters__filter-count">8</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Disabled</div>
          <div class="vertical-filters__filter-count">99</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
      </div>
    </div>

    <div class="vertical-filters__save-panel">
      <div class="vertical-filters__save-panel-link">
        <a href="">Save Filter</a>
      </div>
      <div class="vertical-filters__save-panel-body">
        <div class="fieldset">
          <div class="field field--small">
            <span class="fieldset__svg-icon"></span>
            <label class="field__label">Filter name</label>
            <input type="text" class="field__input filter-name" tabindex="4" maxlength="64" />
            <div class="field__placeholder">Filter name</div>
            <span class="field-state--success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26px"
                height="26px"
                viewBox="0 0 26 26"
                focusable="false"
              >
                <path
                  d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                ></path>
              </svg>
            </span>
            <span class="field-state--close">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 16 16"
                enable-background="new 0 0 16 16"
                xml:space="preserve"
                focusable="false"
              >
                <path
                  d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <button class="btn btn-default btn-medium vertical-filters__save-panel-button">Save</button>
      </div>
    </div>
  </div>

  <div class="filtered-list__items long-list">
    <div class="list-element list-element--compact list-element--has-hover">
      <div class="list-element__toggle">
        <input
          type="checkbox"
          value="on"
          id="gwt-uid-1455"
          tabindex="0"
          class="list-element__toggle-checkbox"
        />
        <label for="gwt-uid-1455" class="list-element__toggle-label"></label>
      </div>
      <div class="list-element__image">
        <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/black_dress_160px.jpg" />
      </div>
      <div class="list-element__content">
        <div class="list-element__info">
          <div class="list-element__header">
            <div class="list-element__main-info">
              <div class="list-element__title">
                <span>SAMPLE. Black Dress</span>
              </div>
              <div class="list-element__description"><span class="muted">0001</span></div>
            </div>
            <div class="list-element__price">$44.95</div>
          </div>
          <div class="list-element__data-row">
            Perfect for wearing with your favorite flat sandals or trendy sneakers.
          </div>
        </div>
        <div class="list-element__actions">
          <div class="list-element__price">$44.95</div>
        </div>
      </div>
      <div class="list-element__move-forward-arrow"></div>
    </div>
    <div class="list-element list-element--compact list-element--has-hover">
      <div class="list-element__toggle">
        <input
          type="checkbox"
          value="on"
          id="gwt-uid-1456"
          tabindex="0"
          class="list-element__toggle-checkbox"
        />
        <label for="gwt-uid-1456" class="list-element__toggle-label"></label>
      </div>
      <div class="list-element__image">
        <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/black_tank_160px.jpg" />
      </div>
      <div class="list-element__content">
        <div class="list-element__info">
          <div class="list-element__header">
            <div class="list-element__main-info">
              <div class="list-element__title">
                <span>SAMPLE. Black Tank</span>
              </div>
              <div class="list-element__description"><span class="muted">0002</span></div>
            </div>
            <div class="list-element__price">$19.95</div>
          </div>
          <div class="list-element__data-row">Perfect for a day in the sun.</div>
        </div>
        <div class="list-element__actions">
          <div class="list-element__price">$19.95</div>
        </div>
      </div>
      <div class="list-element__move-forward-arrow"></div>
    </div>
    <div class="list-element list-element--compact list-element--has-hover">
      <div class="list-element__toggle">
        <input
          type="checkbox"
          value="on"
          id="gwt-uid-1457"
          tabindex="0"
          class="list-element__toggle-checkbox"
        />
        <label for="gwt-uid-1457" class="list-element__toggle-label"></label>
      </div>
      <div class="list-element__image">
        <img src="https://dpbfm6h358sh7.cloudfront.net/default-store/jade_tank_160px.jpg" />
      </div>
      <div class="list-element__content">
        <div class="list-element__info">
          <div class="list-element__header">
            <div class="list-element__main-info">
              <div class="list-element__title">
                <span>SAMPLE. Jade Tank</span>
              </div>
              <div class="list-element__description"><span class="muted">0003</span></div>
            </div>
            <div class="list-element__price">$18.95</div>
          </div>
          <div class="list-element__data-row">
            This lightweight crinkle gauze tank features an allover floral print.
          </div>
        </div>
        <div class="list-element__actions">
          <div class="list-element__price">$18.95</div>
        </div>
      </div>
      <div class="list-element__move-forward-arrow"></div>
    </div>
  </div>
</template>
