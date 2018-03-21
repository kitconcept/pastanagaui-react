import React, { Component, Fragment } from 'react';
import Icon from './Icon/Icon';
import pastanagaSmall from './pastanaga-small.svg';
import pastanagalogo from './pastanaga.svg';
import './App.css';
import penSVG from './icons/pen.svg';
import folderSVG from './icons/folder.svg';
import addSVG from './icons/add-document.svg';
import moreSVG from './icons/more.svg';
import userSVG from './icons/user.svg';

class App extends Component {
  state = {
    expanded: false,
    showMenu: false,
    menuStyle: {},
    menuComponents: [],
  };

  handleShrink = () => this.setState(state => ({ expanded: !state.expanded }));

  closeMenu = () =>
    this.setState(() => ({ showMenu: false, menuComponents: [] }));

  loadComponent = type => {
    const { menuComponents } = this.state;
    const nextIndex = menuComponents.length;

    if (
      !this.state.menuComponents.reduce(
        (prev, current) => prev && current.name === `${type}`,
        false,
      )
    ) {
      import(`./${type}.jsx`).then(LoadedComponent =>
        this.setState(state => ({
          menuComponents: state.menuComponents.concat({
            name: `${type}`,
            component: (
              <LoadedComponent.default
                loadComponent={this.loadComponent}
                unloadComponent={this.unloadComponent}
                componentIndex={nextIndex}
                theToolbar={this.theToolbar}
                key={`menucomp-${nextIndex}`}
              />
            ),
          }),
        })),
      );
    }
  };

  unloadComponent = () => {
    this.setState(state => ({
      menuComponents: state.menuComponents.slice(0, -1),
    }));
  };

  showMenu = (e, selector) => {
    // PersonalTools always shows at bottom
    if (selector === 'PersonalTools') {
      this.setState(state => {
        return {
          showMenu: !state.showMenu,
          menuStyle: { bottom: 0 },
        };
      });
    } else {
      const elemOffsetTop = e.target.getBoundingClientRect().top;
      this.setState(state => {
        return {
          showMenu: !state.showMenu,
          menuStyle: { top: `${elemOffsetTop}px` },
        };
      });
    }
    this.loadComponent(selector);
  };

  render() {
    return (
      <Fragment>
        <div
          style={this.state.menuStyle}
          className={
            this.state.showMenu ? 'toolbar-content show' : 'toolbar-content'
          }
          ref={toolbar => {
            this.theToolbar = toolbar;
          }}
        >
          <div
            className="pusher-puller"
            style={{
              left: `-${(this.state.menuComponents.length - 1) * 100}%`,
            }}
          >
            {this.state.menuComponents.map(component => (
              <Fragment>{component.component}</Fragment>
            ))}
          </div>
        </div>
        <div className={this.state.expanded ? 'toolbar expanded' : 'toolbar'}>
          <div className="toolbar-body">
            <div className="toolbar-actions">
              <a className="edit" href="#">
                <Icon name={penSVG} size="36px" className="circled" />
              </a>
              <a href="#">
                <Icon name={folderSVG} size="36px" />
              </a>
              <a href="#">
                <Icon name={addSVG} size="36px" />
              </a>
              <button
                className="more"
                onClick={e => this.showMenu(e, 'More')}
                tabIndex={0}
              >
                <Icon name={moreSVG} size="36px" />
              </button>
            </div>
            <div className="toolbar-bottom">
              <img className="minipastanaga" src={pastanagaSmall} alt="" />
              <button
                className="user"
                onClick={e => this.showMenu(e, 'PersonalTools')}
                tabIndex={0}
              >
                <Icon name={userSVG} size="36px" />
              </button>
              <div className="divider" />
              <div className="pastanagalogo">
                <img src={pastanagalogo} alt="" />
              </div>
            </div>
          </div>
          <div className="toolbar-handler">
            <button onClick={this.handleShrink} />
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, ea pri aperiam scribentur, an inani
          corpora ius. Te velit saepe electram pro, ea case soleat democritum
          sea. Principes incorrupte dissentiet id eos. Erant mnesarchum id eos,
          te quo offendit complectitur. Ut has luptatum petentium, nam eu
          apeirian abhorreant. Alia porro velit no vel. Te magna scripta
          disputando nec, mundi dictas mediocritatem ex duo. Minim inciderint
          nec no. Munere admodum suavitate ei usu, ei usu veniam habemus, meis
          ponderum duo ex. Te soleat salutandi vituperatoribus has. Pro ne duis
          detracto, at vis noster legendos. Eos elitr ocurreret te, est augue
          theophrastus ei. Sint persius disputando ut vis, vim in tritani
          alterum gloriatur. Duo vivendo definitiones ea, has no scripta alterum
          petentium. Cu vim dolorem convenire deterruisset, te lorem appetere
          suscipiantur eos, at magna ponderum vel. Per at hinc minim dolorem.
          Cum percipit expetendis eu, ad sed eros regione. Falli corpora
          forensibus nam cu. Cibo assueverit eam ei. Zril salutatus id ius. Pri
          an fierent appellantur, no vim bonorum consulatu maiestatis, nostro
          facilis adipisci pri ut. Pro aperiri aliquam cu, natum affert noster
          eum te, sea te utinam semper numquam. Nam tempor nonumes at, qui at
          decore blandit facilisi, an sonet invidunt mei. Qui an nostrum
          reprimique delicatissimi, mel ex saepe ornatus hendrerit. Sed aperiam
          docendi insolens in, ex repudiare definitiones has, dictas commodo
          delenit ei mea. Tollit feugait dissentiunt cu vel. Alii delectus
          instructior vis no. Pro case eripuit indoctum ut, tollit invidunt
          volutpat eum te. No viris meliore voluptatum eos, id adhuc labores
          mediocritatem vis, has ea sint velit accusamus. Munere soluta duo cu,
          essent scaevola vel et. Assum causae comprehensam et eam. Cu his
          decore periculis efficiantur, in dicunt nominavi assentior ius. At his
          iudico aeterno pertinax, vitae deserunt vim at. At usu quem malorum
          intellegat. Dicta consequat reprimique vix ut. Harum tamquam suavitate
          ea nec, cum adipisci repudiare ut, ius mundi sonet offendit no. Est cu
          omittantur conclusionemque, verear volutpat ea quo, tamquam argumentum
          an eam. Ut vim electram moderatius, est et prima illum. Eleifend
          patrioque adolescens sed ex. Ei quo nemore feugait. Odio decore
          instructior an duo, nam eripuit instructior ea, primis delenit
          inimicus ut pro. Duo at libris forensibus suscipiantur. Eros ferri
          albucius eam te. Cu lorem salutatus persecuti quo. Erant semper
          invenire id per, qui eu possit detracto invidunt. Pro quod iriure
          expetenda eu. No vim eruditi deserunt, nullam virtute theophrastus quo
          cu. Qui odio affert timeam te. Eirmod dolores signiferumque ei ius, ea
          decore facete instructior usu, duo in quod deseruisse. Has te vero
          doming lobortis, an legendos theophrastus sed. Semper veritus sed an.
          Senserit dissentias an qui, autem invenire ex mea, nostrum eleifend
          referrentur sea ei. Lorem deterruisset vis cu, vix te enim erat
          vivendum, primis offendit quo ex. Sit in corpora rationibus, id mundi
          iudicabit cum, meliore disputando te mei. Vis instructior
          conclusionemque ut, eu sea incorrupte interpretaris. Zril volumus
          nominati vix ne. Wisi alienum lucilius cu mea. Ea vix copiosae
          contentiones, pri aliquip integre eu. Ius mundi consetetur te, pro
          dolores honestatis disputando ne, at sed paulo dissentiunt. Ad ipsum
          comprehensam his. Sint mundi eirmod pri ad. Suas idque conceptam mea
          at, in corpora petentium nec. His ea animal postulant voluptatum, ea
          mei docendi nominavi urbanitas. Ius ea vivendo omnesque. Molestiae
          similique ei duo. Ut eirmod albucius omnesque vix, ferri deleniti at
          qui. Eum autem laudem deleniti ea, cu recteque aliquando mea. Iusto
          tibique repudiare ne eos, ut est dico legimus. Nam aliquam reprimique
          eu. Dicam nostro fabulas id sit, pri ferri delicata expetendis ea, at
          sea tantas gloriatur. Cu vis etiam mnesarchum, aliquam liberavisse
          philosophia in per, duo ad magna facilisi erroribus. Duo tale nemore
          perfecto ne. Vel tale saepe eu, ei qui alii sint, id sea dicam
          deseruisse. Suas consul vel et. Idque recusabo urbanitas an vis. Ne
          enim fastidii qui, ad vim iudico adipiscing intellegam. Ad nusquam
          corpora constituto qui, natum autem maiorum an his, graeci intellegat
          delicatissimi ex ius. At utroque instructior pri. Meliore iudicabit
          imperdiet eam ne, qui ad falli sensibus, ex esse dissentiunt vix. Vis
          ferri saperet consectetuer id, ne fugit efficiantur has, cu vix erant
          altera mollis. Ius eu impetus reprimique. Te his discere utroque
          recteque, eros debet atomorum eum ut, at equidem assentior has. No
          nusquam delicata sea, est no porro intellegebat. Sit an dictas
          scaevola delicatissimi. Vis ea nominavi percipitur, timeam docendi
          adipiscing mea an, an graeco verterem usu. Per in scaevola
          referrentur. Ius ne dico percipitur vituperatoribus, id per omnis
          periculis. Pertinax pericula ex usu, no dicunt delectus convenire eum,
          at vel volumus dignissim elaboraret. Usu no electram accusamus
          molestiae, movet lobortis ut vix. Sea in novum dicit voluptatum,
          convenire scriptorem mel et. Vix eu omnis dolorem sapientem, eu
          viderer albucius vis. Sed purto persecuti ad. Est no erroribus
          tincidunt. Invenire mnesarchum vis te, cum ad recteque vulputate. At
          has simul officiis, mea at brute dolorem accumsan. Vel cu aeque
          liberavisse, pri ferri utroque voluptatibus ne, ex eos omnesque
          signiferumque. Debet altera reprimique id has. Civibus sententiae his
          ex, sed enim hendrerit an, sea at libris hendrerit urbanitas. Aperiri
          integre eum id, te vis munere cetero. Lorem ipsum dolor sit amet, ea
          pri aperiam scribentur, an inani corpora ius. Te velit saepe electram
          pro, ea case soleat democritum sea. Principes incorrupte dissentiet id
          eos. Erant mnesarchum id eos, te quo offendit complectitur. Ut has
          luptatum petentium, nam eu apeirian abhorreant. Alia porro velit no
          vel. Te magna scripta disputando nec, mundi dictas mediocritatem ex
          duo. Minim inciderint nec no. Munere admodum suavitate ei usu, ei usu
          veniam habemus, meis ponderum duo ex. Te soleat salutandi
          vituperatoribus has. Pro ne duis detracto, at vis noster legendos. Eos
          elitr ocurreret te, est augue theophrastus ei. Sint persius disputando
          ut vis, vim in tritani alterum gloriatur. Duo vivendo definitiones ea,
          has no scripta alterum petentium. Cu vim dolorem convenire
          deterruisset, te lorem appetere suscipiantur eos, at magna ponderum
          vel. Per at hinc minim dolorem. Cum percipit expetendis eu, ad sed
          eros regione. Falli corpora forensibus nam cu. Cibo assueverit eam ei.
          Zril salutatus id ius. Pri an fierent appellantur, no vim bonorum
          consulatu maiestatis, nostro facilis adipisci pri ut. Pro aperiri
          aliquam cu, natum affert noster eum te, sea te utinam semper numquam.
          Nam tempor nonumes at, qui at decore blandit facilisi, an sonet
          invidunt mei. Qui an nostrum reprimique delicatissimi, mel ex saepe
          ornatus hendrerit. Sed aperiam docendi insolens in, ex repudiare
          definitiones has, dictas commodo delenit ei mea. Tollit feugait
          dissentiunt cu vel. Alii delectus instructior vis no. Pro case eripuit
          indoctum ut, tollit invidunt volutpat eum te. No viris meliore
          voluptatum eos, id adhuc labores mediocritatem vis, has ea sint velit
          accusamus. Munere soluta duo cu, essent scaevola vel et. Assum causae
          comprehensam et eam. Cu his decore periculis efficiantur, in dicunt
          nominavi assentior ius. At his iudico aeterno pertinax, vitae deserunt
          vim at. At usu quem malorum intellegat. Dicta consequat reprimique vix
          ut. Harum tamquam suavitate ea nec, cum adipisci repudiare ut, ius
          mundi sonet offendit no. Est cu omittantur conclusionemque, verear
          volutpat ea quo, tamquam argumentum an eam. Ut vim electram
          moderatius, est et prima illum. Eleifend patrioque adolescens sed ex.
          Ei quo nemore feugait. Odio decore instructior an duo, nam eripuit
          instructior ea, primis delenit inimicus ut pro. Duo at libris
          forensibus suscipiantur. Eros ferri albucius eam te. Cu lorem
          salutatus persecuti quo. Erant semper invenire id per, qui eu possit
          detracto invidunt. Pro quod iriure expetenda eu. No vim eruditi
          deserunt, nullam virtute theophrastus quo cu. Qui odio affert timeam
          te. Eirmod dolores signiferumque ei ius, ea decore facete instructior
          usu, duo in quod deseruisse. Has te vero doming lobortis, an legendos
          theophrastus sed. Semper veritus sed an. Senserit dissentias an qui,
          autem invenire ex mea, nostrum eleifend referrentur sea ei. Lorem
          deterruisset vis cu, vix te enim erat vivendum, primis offendit quo
          ex. Sit in corpora rationibus, id mundi iudicabit cum, meliore
          disputando te mei. Vis instructior conclusionemque ut, eu sea
          incorrupte interpretaris. Zril volumus nominati vix ne. Wisi alienum
          lucilius cu mea. Ea vix copiosae contentiones, pri aliquip integre eu.
          Ius mundi consetetur te, pro dolores honestatis disputando ne, at sed
          paulo dissentiunt. Ad ipsum comprehensam his. Sint mundi eirmod pri
          ad. Suas idque conceptam mea at, in corpora petentium nec. His ea
          animal postulant voluptatum, ea mei docendi nominavi urbanitas. Ius ea
          vivendo omnesque. Molestiae similique ei duo. Ut eirmod albucius
          omnesque vix, ferri deleniti at qui. Eum autem laudem deleniti ea, cu
          recteque aliquando mea. Iusto tibique repudiare ne eos, ut est dico
          legimus. Nam aliquam reprimique eu. Dicam nostro fabulas id sit, pri
          ferri delicata expetendis ea, at sea tantas gloriatur. Cu vis etiam
          mnesarchum, aliquam liberavisse philosophia in per, duo ad magna
          facilisi erroribus. Duo tale nemore perfecto ne. Vel tale saepe eu, ei
          qui alii sint, id sea dicam deseruisse. Suas consul vel et. Idque
          recusabo urbanitas an vis. Ne enim fastidii qui, ad vim iudico
          adipiscing intellegam. Ad nusquam corpora constituto qui, natum autem
          maiorum an his, graeci intellegat delicatissimi ex ius. At utroque
          instructior pri. Meliore iudicabit imperdiet eam ne, qui ad falli
          sensibus, ex esse dissentiunt vix. Vis ferri saperet consectetuer id,
          ne fugit efficiantur has, cu vix erant altera mollis. Ius eu impetus
          reprimique. Te his discere utroque recteque, eros debet atomorum eum
          ut, at equidem assentior has. No nusquam delicata sea, est no porro
          intellegebat. Sit an dictas scaevola delicatissimi. Vis ea nominavi
          percipitur, timeam docendi adipiscing mea an, an graeco verterem usu.
          Per in scaevola referrentur. Ius ne dico percipitur vituperatoribus,
          id per omnis periculis. Pertinax pericula ex usu, no dicunt delectus
          convenire eum, at vel volumus dignissim elaboraret. Usu no electram
          accusamus molestiae, movet lobortis ut vix. Sea in novum dicit
          voluptatum, convenire scriptorem mel et. Vix eu omnis dolorem
          sapientem, eu viderer albucius vis. Sed purto persecuti ad. Est no
          erroribus tincidunt. Invenire mnesarchum vis te, cum ad recteque
          vulputate. At has simul officiis, mea at brute dolorem accumsan. Vel
          cu aeque liberavisse, pri ferri utroque voluptatibus ne, ex eos
          omnesque signiferumque. Debet altera reprimique id has. Civibus
          sententiae his ex, sed enim hendrerit an, sea at libris hendrerit
          urbanitas. Aperiri integre eum id, te vis munere cetero.
        </div>
      </Fragment>
    );
  }
}

export default App;
