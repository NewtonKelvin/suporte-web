"use client";
import { RootState } from "@/app/store";
import { userLogout } from "@/redux/auth/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
	const { user } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const logout = () => {
		dispatch(userLogout());
		router.push("/login");
	};
	return (
		<div className="block">
			<h1>Welcome {user.name || "fail"}!</h1>
			<Link
				className="text-opacity-light hover:text-primary dark:text-opacity-dark dark:hover:text-primary"
				href="/login"
			>
				Go back to login
			</Link>
			<p
				className="text-opacity-light hover:cursor-pointer hover:text-red-500 dark:text-opacity-dark dark:hover:text-red-500"
				onClick={logout}
			>
				Logout
			</p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero
			velit, sagittis in mattis sed, porta fringilla nisl. Aliquam erat
			volutpat. Praesent eu urna in eros lacinia mattis quis vel elit. Donec
			imperdiet condimentum quam ac blandit. Sed lacinia et enim sit amet
			sodales. Fusce eu mollis sem, sed posuere leo. Suspendisse vitae rutrum
			erat. Praesent et ornare felis, non gravida arcu. Vivamus tincidunt,
			lectus et aliquam luctus, risus dui placerat orci, eu convallis quam ante
			sed lacus. Donec augue velit, molestie sed dolor id, gravida pellentesque
			quam. Fusce facilisis ex convallis urna dapibus hendrerit. Nam id dui sed
			elit posuere dictum vel et nunc. Nullam elementum diam ac ex sollicitudin,
			quis ullamcorper sem venenatis. Nullam accumsan bibendum diam ac gravida.
			Nunc a quam nunc. Nunc ac ultricies risus, quis lacinia nunc. Pellentesque
			tempor vehicula odio, id vestibulum justo pharetra non. Ut ornare nisl sed
			dapibus cursus. Integer placerat mollis nulla sit amet vehicula. Mauris
			felis risus, lacinia in venenatis vitae, volutpat fermentum erat. Mauris
			sit amet malesuada lectus, ac vehicula ligula. In quis risus ac velit
			dapibus aliquet id vitae leo. Vivamus blandit dui turpis, ut mattis metus
			laoreet vitae. Sed orci mi, viverra sagittis ipsum in, eleifend
			sollicitudin ex. Nunc egestas massa a purus facilisis, ut placerat dui
			interdum. Praesent placerat, nulla in elementum efficitur, felis risus
			viverra mauris, et hendrerit turpis justo non est. Donec vestibulum nec
			lorem quis convallis. Cras ac tortor at nisi aliquam vestibulum a eu
			massa. Donec mauris risus, ultricies at risus id, tempus sodales erat.
			Phasellus eget nulla erat. Maecenas vel accumsan nulla. Donec nec
			convallis sapien. Proin quis ante ut nunc facilisis sodales. Curabitur
			tempus, tortor sed tincidunt porta, mauris lectus euismod lectus, eu
			rhoncus quam libero non orci. Proin condimentum ligula ut leo facilisis,
			nec pharetra ipsum pellentesque. Nunc et ante pulvinar, efficitur purus
			vel, iaculis orci. Etiam sit amet bibendum tortor, non fermentum lacus.
			Cras at tortor imperdiet, tempor eros a, pellentesque metus. Quisque
			varius, lectus vel scelerisque maximus, est nisl mollis orci, a dapibus
			magna ex id mi. Praesent maximus vestibulum ipsum, non accumsan lectus
			tempus sit amet. Vivamus tincidunt massa et dolor luctus ultrices. Proin
			ac justo laoreet, tempus libero eu, convallis est. Maecenas gravida, est
			at auctor cursus, mauris metus elementum nulla, nec porttitor lorem mauris
			a lorem. Curabitur at velit facilisis, rutrum dui eget, porttitor nisl.
			Maecenas nunc nisl, elementum egestas quam vitae, pellentesque aliquet
			ante. Aliquam laoreet laoreet erat ut commodo. Etiam maximus velit eu
			iaculis sagittis. Praesent et volutpat dolor, quis ultrices justo. Vivamus
			suscipit justo sed nisl tristique pulvinar. In hac habitasse platea
			dictumst. Maecenas ullamcorper, elit et interdum tempor, diam ex efficitur
			leo, non malesuada lectus purus non neque. Suspendisse aliquam eros id
			suscipit commodo. Suspendisse potenti. Praesent tempor erat quis risus
			imperdiet aliquam. Nullam consequat sapien eu arcu sagittis porttitor.
			Integer tristique volutpat sem sed tristique. Fusce et mollis urna. Nunc
			id tincidunt odio. Nullam hendrerit molestie dolor, quis vulputate eros
			maximus vitae. Nunc porta lectus non eleifend cursus. Vivamus et turpis
			sit amet nunc auctor lobortis vitae dignissim purus. Proin ac leo
			sollicitudin, scelerisque velit et, pharetra odio. Sed vel elit ac dolor
			lobortis bibendum. Aliquam nibh tellus, pulvinar sit amet magna id,
			pretium elementum elit. Pellentesque habitant morbi tristique senectus et
			netus et malesuada fames ac turpis egestas. Phasellus a malesuada enim.
			Suspendisse vehicula orci non nisl placerat, sed suscipit dui ornare.
			Aliquam pulvinar egestas vehicula. Interdum et malesuada fames ac ante
			ipsum primis in faucibus. Cras consectetur finibus feugiat. Aenean
			ultricies massa nibh, et pulvinar risus dictum sit amet. Quisque et
			eleifend quam, id tristique enim. Aenean ac imperdiet mi. Proin pretium
			pellentesque fringilla. Pellentesque et erat dui. Nam eleifend massa quis
			dolor dapibus, a varius nibh pharetra. Aliquam auctor enim metus, aliquet
			tincidunt nulla fringilla tincidunt. Sed lacinia congue purus, nec
			facilisis nulla lacinia et. Class aptent taciti sociosqu ad litora
			torquent per conubia nostra, per inceptos himenaeos. Nulla ac elit et dui
			sodales feugiat vel eget lacus. Sed sed purus elementum, vestibulum orci
			ut, elementum nibh. Aenean mattis ut dolor eget mattis. Sed sed velit
			ultrices, eleifend nunc non, hendrerit ex. Integer urna nisi, sodales in
			laoreet in, laoreet non elit. Nullam lectus est, bibendum eu diam sit
			amet, hendrerit egestas urna. Vestibulum finibus mauris sem, sit amet
			sollicitudin erat semper et. Cras eget venenatis nunc. Sed eget nisl
			consequat, hendrerit urna sed, consectetur urna. Aenean ut varius leo.
			Vivamus fermentum diam dui, sed sodales erat eleifend ac. Mauris interdum,
			quam finibus rutrum blandit, nisi nibh pretium erat, posuere imperdiet
			dolor nulla in velit. Aenean rutrum aliquet enim, eu gravida erat suscipit
			euismod. Vivamus sollicitudin lobortis risus lobortis varius. Vestibulum
			nec turpis fermentum lectus tristique tempus in vitae mi. Nullam volutpat
			eros tortor, ut imperdiet sapien euismod non. Interdum et malesuada fames
			ac ante ipsum primis in faucibus. Suspendisse sed suscipit nunc, quis
			consectetur leo. Vestibulum mattis quam et tempor ornare. Maecenas
			malesuada quis odio vitae vehicula. Phasellus semper turpis eros, nec
			efficitur quam blandit non. Pellentesque tincidunt vitae leo a egestas.
			Nam condimentum tempus sapien, id porttitor dolor dapibus sit amet. Mauris
			fermentum ligula non convallis consequat. Sed porta tortor felis, quis
			cursus lacus efficitur vitae. Aliquam volutpat imperdiet urna, sit amet
			rutrum tortor posuere nec. Donec ut purus hendrerit, pretium nisi nec,
			pharetra risus. Fusce sit amet lectus et odio tristique eleifend. In hac
			habitasse platea dictumst. Donec faucibus accumsan justo, non sodales arcu
			dictum sit amet. Curabitur mauris odio, volutpat at maximus ac, euismod
			sed erat. Nullam porttitor luctus lacus, quis commodo purus porta at. Cras
			nisi nunc, tempus in magna in, ornare lobortis magna. Cras condimentum
			interdum mollis. Maecenas feugiat, augue nec egestas hendrerit, quam
			tellus mollis erat, a tristique est eros at leo. Duis at urna mollis
			mauris feugiat aliquet sed eget risus. Phasellus euismod ipsum ut sagittis
			luctus. Fusce semper nibh ut lacus cursus, ut vestibulum purus tempus.
			Nulla bibendum sapien sapien, sit amet porttitor ex finibus ac. Quisque mi
			enim, ultrices non elementum at, consequat a ipsum. Donec mollis tempor
			odio, non bibendum metus bibendum sit amet. In urna nibh, consequat et
			porttitor non, accumsan id ante. Integer laoreet elementum orci id
			condimentum. In non malesuada sem, sed vestibulum nisi. Pellentesque quis
			nisl blandit, consequat purus convallis, condimentum orci. Class aptent
			taciti sociosqu ad litora torquent per conubia nostra, per inceptos
			himenaeos. Phasellus a rhoncus sem, a dictum leo. Nam egestas tortor in
			blandit blandit. Aenean tincidunt luctus quam et tempor. Quisque
			scelerisque auctor lectus eget suscipit. Quisque pretium id mauris ut
			facilisis. Nullam eleifend blandit metus. Cras et nunc iaculis, egestas
			est faucibus, luctus metus. In ut lectus gravida, commodo eros quis,
			dictum quam. Nulla in porta tellus. Sed tincidunt ut sem a maximus.
			Aliquam vitae semper lectus, eu iaculis mi. Aenean fringilla gravida
			turpis nec faucibus. Morbi porta mi tellus, vitae iaculis erat gravida ac.
			Ut placerat dapibus nisl, sed varius nisi maximus sed. Duis viverra
			condimentum risus. Mauris laoreet leo quis dolor mollis, non ultrices
			justo iaculis. Curabitur imperdiet nec nunc vitae tincidunt. Phasellus
			egestas augue orci, euismod hendrerit augue imperdiet id. Maecenas
			convallis ultrices arcu. Donec posuere neque in mauris faucibus, eu luctus
			sapien tempus. Nam condimentum nibh id metus dictum sollicitudin id sit
			amet nulla. Duis libero mauris, auctor eu dui ac, ornare tempus ante.
			Fusce scelerisque enim vel luctus rhoncus. Nam aliquet, ex eget vulputate
			lacinia, mi nisl aliquam eros, sit amet placerat justo nunc quis mi. Nunc
			interdum massa vel orci rutrum, at tristique erat venenatis. Cras tempus
			velit quis magna condimentum malesuada. Praesent blandit sapien a nulla
			cursus tempor. Praesent cursus tincidunt neque, in aliquam metus mattis
			id. Fusce eget lacus interdum, interdum metus ut, porttitor ante.
			Curabitur placerat neque diam, sed luctus orci sodales pharetra. Aenean
			libero elit, laoreet ut porttitor id, pulvinar vitae lectus. Morbi
			malesuada lacinia ultricies. Nullam faucibus magna a lorem mollis luctus.
			Nam iaculis sapien in dictum dictum. Maecenas finibus pharetra dolor
			bibendum ullamcorper. Donec hendrerit euismod erat, ac vehicula risus
			egestas a. Etiam diam enim, ultricies in efficitur quis, varius at lectus.
			Morbi pulvinar imperdiet nisl eu ultrices. Sed commodo ullamcorper erat a
			pulvinar. Phasellus dictum eu justo id condimentum. Maecenas et risus eget
			nibh laoreet malesuada. Donec vitae enim vel libero lobortis aliquam ut
			sit amet nibh. Vestibulum commodo maximus sem sit amet eleifend. Interdum
			et malesuada fames ac ante ipsum primis in faucibus. Fusce at aliquet
			nulla. Nullam ultrices quis ipsum non pharetra. Donec dictum leo id
			interdum mattis. Curabitur rutrum tortor non libero condimentum, sed
			dictum ligula vehicula. Nunc tincidunt ligula ut erat porta, id vulputate
			neque viverra. Curabitur at interdum diam. Maecenas malesuada varius
			purus, id tempus nibh interdum sed. Maecenas et est a nunc rutrum varius
			sed id tellus. Quisque hendrerit, odio et consectetur faucibus, quam ante
			sodales lectus, nec rutrum neque dui sit amet felis. Vestibulum facilisis
			consectetur dui et suscipit. Aenean id nibh ut nisl dapibus ullamcorper at
			sed massa. Maecenas ipsum libero, suscipit ut urna ut, suscipit molestie
			dolor. Fusce vitae venenatis odio. Proin a leo lobortis, consectetur dolor
			sed, tempor ex. Maecenas ipsum erat, convallis eu molestie ac, pharetra
			sed lacus. Pellentesque aliquam erat eget arcu vestibulum pellentesque.
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
			cubilia curae; Praesent purus augue, ornare nec dictum sit amet, semper
			sit amet nunc. Vivamus pulvinar condimentum dapibus. Mauris ullamcorper
			nisi risus, id sagittis lectus lacinia ac. Sed vel augue elit. Vivamus
			felis nulla, porttitor vel elit a, semper interdum lacus. Cras maximus
			fermentum lacinia. Aliquam id nibh eu augue consectetur interdum. Fusce
			semper facilisis massa, eget eleifend velit pulvinar sit amet. In arcu
			mauris, tincidunt vel orci blandit, sagittis semper magna. Nulla imperdiet
			dictum lectus, sit amet mollis leo sagittis id. Ut molestie a erat id
			condimentum. Nullam dignissim neque turpis, nec laoreet risus molestie a.
			Phasellus pellentesque mi ac eleifend ultrices. Mauris at justo lobortis
			ante commodo posuere. In vel fermentum ex, vel pharetra felis. Vestibulum
			bibendum scelerisque venenatis. Nunc non rutrum nulla. Vivamus volutpat
			massa non lacinia luctus. Fusce tincidunt diam sed dolor porta laoreet.
			Quisque sollicitudin id mi id congue. Nunc sed sem scelerisque, pretium
			arcu vitae, commodo libero. Quisque porttitor nisi ac mauris tincidunt, at
			aliquam leo cursus. Pellentesque vestibulum nibh vel metus pharetra porta.
			Integer sollicitudin mauris ac placerat faucibus. Nam id turpis sit amet
			purus bibendum ullamcorper. Nullam vitae lectus auctor, consectetur nulla
			id, tempus ipsum. Nullam et bibendum purus. Pellentesque habitant morbi
			tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam
			eget quam arcu. Fusce blandit lacinia rutrum. Etiam sodales velit et ex
			lobortis condimentum. Nulla dapibus, lectus ut dictum posuere, risus urna
			aliquam lectus, a bibendum mi velit at nisl. Aliquam congue tellus at
			lectus luctus tincidunt. Morbi eget tellus semper, blandit leo vitae,
			egestas velit. In at elit sit amet quam suscipit laoreet. In risus ipsum,
			accumsan ac lobortis et, pellentesque pulvinar mauris. Sed a purus eget
			neque lacinia placerat at at nulla. Suspendisse varius orci vitae elit
			scelerisque finibus. Praesent ex sapien, semper sed nulla consequat,
			commodo aliquet eros. Pellentesque vitae purus bibendum, pharetra magna
			id, sollicitudin turpis. Maecenas quis enim massa. Ut ac dolor ipsum.
			Curabitur commodo erat ut felis interdum, sit amet posuere tortor
			efficitur. Ut volutpat sed massa quis viverra. Aliquam varius odio sed leo
			pulvinar consectetur. Vivamus interdum, nisi at tempus tempor, turpis ex
			lobortis enim, at tempus enim diam in turpis. Donec pharetra ex eget
			vestibulum convallis. Phasellus iaculis neque eros, nec consequat nibh
			mattis id. Mauris sollicitudin mauris in volutpat dignissim. Morbi maximus
			nulla tempor, aliquet quam ac, fermentum ligula. Sed sed enim a massa
			finibus tincidunt. Donec placerat nibh non risus consequat lobortis.
			Vestibulum mattis lorem eget purus varius, sit amet venenatis augue
			efficitur. Nulla at mauris ante. Aliquam ultrices, lectus non dignissim
			pharetra, turpis massa cursus leo, a lobortis nunc neque lobortis erat.
			Fusce rutrum eros a volutpat pellentesque. Donec non justo eget mi
			pulvinar blandit in eget leo. Suspendisse dolor nibh, ullamcorper in
			turpis sed, tempor egestas sem. Sed dignissim metus et suscipit commodo.
			Morbi at metus eu nisl tristique blandit. Morbi pulvinar ex suscipit,
			venenatis nulla pharetra, finibus diam. Aliquam in massa scelerisque,
			fermentum mauris sed, rutrum lorem. Suspendisse hendrerit lorem sed
			elementum dignissim. Morbi iaculis non purus nec malesuada. Sed eu mauris
			nibh. Donec sit amet erat commodo, fringilla nisi id, tristique tellus.
			Praesent porta bibendum rutrum. Aenean eget rhoncus odio. Phasellus congue
			tortor at metus congue pharetra. Suspendisse potenti. Mauris semper
			consequat lorem et posuere. Maecenas vestibulum rutrum tellus, fringilla
			vestibulum dui tempus ut. Pellentesque habitant morbi tristique senectus
			et netus et malesuada fames ac turpis egestas. Mauris euismod elementum
			pharetra. Donec convallis quis est non finibus. Phasellus pretium
			ultricies velit fringilla tristique. Phasellus nec est egestas, mattis
			quam vitae, imperdiet erat. Praesent et accumsan metus. In sagittis
			rhoncus facilisis. Donec quis commodo justo. Suspendisse nulla erat,
			rhoncus nec pharetra vel, tristique non lacus.
		</div>
	);
};
export default Dashboard;
