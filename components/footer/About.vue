<template>
  <div class="about">
    <p>
      Créer des sites web professionnels, c’est ce que nous faisons. Parlez-nous
      de vos besoins, nous serions ravis de collaborer avec vous.
    </p>
    <a href="mailto:contact@univerweb.dz" class="link">
      <span class="visually-hidden">E-mail :</span>
      contact@univerweb.dz
    </a>
  </div>
</template>

<style>
footer .about p {
  font-weight: 600;
  width: 310px;
  margin: 0 0 30px;
}

.link {
  display: inline-block;
  position: relative;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

.link:hover {
  color: var(--blue);
}

.link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: currentColor;
}
</style>
