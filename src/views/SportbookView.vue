<template>
  <div class="sportbook bg-1">
    <Loading v-if="isLoading"></Loading>
    <HeaderSuccess v-if="isHeader" class="fixed-top" />
    <Carousel class="mtc" />
    <Poker class="mt-5 mb-5" />
    <div class="our-history-title">
      <h2>ราคาต่อรอง <span>& สูงต่ำ</span></h2>
    </div>
    <ImgAnimation />
    <div class="container">
      <div class="row mt-5">
        <div class="col-2">
          <Menusport />
        </div>
        <div class="col-10">
          <component :is="component=$store.getters.getcomponent"></component>
          <!-- <Tabelsport />
          <Tablepredictscore v-if="isTabelsport" />
          <TableCorners v-if="Tablepredictscore" /> -->
        </div>
      </div>
    </div>   

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            repellat perspiciatis magnam tenetur dignissimos quia debitis,
            eligendi quos ut nihil necessitatibus consectetur doloribus officia
            nostrum, distinctio reiciendis cum quidem! A voluptate sapiente sint
            doloribus pariatur ratione tempore. Accusantium veritatis sit
            impedit, hic eum nemo at unde magni repellat culpa voluptate earum
            aliquam maxime dolor velit assumenda fugit voluptatum! Perspiciatis
            rerum rem animi amet voluptate eum recusandae, facilis numquam
            obcaecati facere voluptatibus soluta eligendi dolorem officiis a,
            excepturi maxime voluptatem exercitationem consequatur sed. At
            fugiat eos iste earum omnis tenetur velit alias magnam dolorum! Ex
            aspernatur at, dignissimos omnis laboriosam hic aut facilis impedit
            assumenda eligendi voluptas iste sint. Quisquam maxime in alias
            fugiat voluptate dolore numquam perspiciatis nam error officiis! Sit
            amet quae saepe minus nihil. Dolore, iusto eos consequuntur
            inventore cupiditate tenetur eius quae, provident nulla modi autem
            accusamus sunt eveniet iure fugit repellendus illum sed harum ex.
            Consequatur minus soluta, pariatur, iste quae, dolor itaque nobis
            iure nesciunt eius voluptate ab fugiat odit in laboriosam ut
            accusamus doloremque odio non. Praesentium commodi, deserunt
            molestias cum laudantium odio voluptatem quas quia aut doloribus
            temporibus eveniet culpa pariatur aspernatur distinctio ducimus non
            repellendus libero et obcaecati eum maxime suscipit doloremque
            sapiente. Nulla adipisci error maiores quisquam a aut eaque nam
            alias dolores itaque soluta omnis cumque, voluptatibus voluptate
            numquam accusamus consequatur earum ipsum eum. Modi minus eius
            incidunt tempora nulla est. Ipsam aspernatur tenetur enim autem
            libero, facere in suscipit ipsa fugiat, dolores dolorem non natus
            beatae distinctio! Optio doloremque illo quia rerum quam. Nostrum
            maxime necessitatibus, sed vero sint cum nobis ab enim architecto
            modi veritatis voluptatem explicabo natus vel quae ex dignissimos
            beatae est! Eligendi ducimus dolore veniam tenetur beatae delectus
            odio assumenda, voluptate cum officiis quae maxime dolorum eum
            recusandae aspernatur quia, autem illum accusamus at deserunt. Aut,
            expedita nemo? Necessitatibus, eaque. Perspiciatis nemo aperiam quos
            assumenda aspernatur consequuntur est blanditiis quae voluptatem
            explicabo. Hic quo ratione inventore sit vero facere sint quisquam a
            beatae doloribus. Dolorum veniam velit quo inventore assumenda ipsa
            ut ea aliquid maxime! Blanditiis consectetur molestiae, nihil illum
            ad atque cupiditate nesciunt id voluptates, doloribus magnam
            veritatis quisquam soluta libero assumenda quae numquam voluptatum
            sequi dolorum aut quos nulla iste? Enim, tempore earum voluptatibus
            iste placeat libero, repudiandae quisquam et alias molestiae illum
            magnam. Molestias illum modi non ex repudiandae eaque omnis numquam
            adipisci, provident, vitae nam beatae rerum ut ratione quidem
            architecto magni explicabo, hic cumque harum soluta distinctio? Eius
            quo nulla amet error officiis nihil, quisquam nobis optio. Quaerat
            pariatur mollitia reprehenderit, inventore fuga dolorem quasi illo
            neque modi suscipit, reiciendis repellat est consequuntur ratione
            culpa dolorum minus non, quae asperiores voluptatum tempore
            accusantium? Voluptatum, accusamus molestias. Aperiam facilis
            officia ipsam est ut. In necessitatibus praesentium dolores
            distinctio nobis. Deserunt, magni rem possimus dicta assumenda totam
            distinctio optio explicabo exercitationem voluptatibus nobis nisi
            ipsum provident numquam quibusdam cupiditate veritatis molestias
            itaque est sed accusamus harum eos. Iure odit officiis doloremque
            impedit reprehenderit necessitatibus suscipit quo expedita
            architecto cum dicta, perferendis eaque.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>{{ this.$store.getters.getcomponent }}</h1>
    <h1>{{ component }}</h1>
    <button @click="add('Tcorner')">ADD</button>
    <div>
      <button @click="component = 'Tcorner'">show from 1</button>
      <button @click="component = 'Tscore'">show from 1</button>
    </div> -->
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import HeaderSuccess from "@/components/HeaderSuccess.vue";
import Loading from "@/components/Loading.vue";
import Carousel from "@/components/Carousel.vue";
import ImgAnimation from "@/components/ImgAnimation.vue";
import Tabelsport from "@/components/Tablesport.vue";
import Tablepredictscore from "@/components/Tablepredictscore.vue";
import TableCorners from "@/components/TableCorners.vue";
import Menusport from "@/components/Menusport.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
import Poker from "@/components/Poker.vue";

export default {
  name: "SportbookView",
  data() {
    return {
      isLoading: true,
      isHeader: false,
      // isTabelsport: true,
      // Tablepredictscore: true,
      component: this.$store.getters.getcomponent,           
    };
  },
  components: {
    Loading,
    HeaderSuccess,
    Carousel,
    Poker,
    ImgAnimation,
    Tsport: Tabelsport,
    Tscore: Tablepredictscore,
    Tcorner: TableCorners,
    Menusport,
    Pagination,
    Footer,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.isHeader = true;
      this.$store.state.test = "P";
    }, 500);
  },
  methods: {
    add(itemMenu){
      this.$store.dispatch("addAction",itemMenu)
    }
  }
};
</script>

<style scoped>
.mtc {
  margin-top: 150px;
}

.bg-1 {
  width: 100%;
  height: 450px;
  background-image: url("@/assets/main-slider-img.jpg");
  position: absolute;
  top: 0;
  right: 0;
}
</style>
